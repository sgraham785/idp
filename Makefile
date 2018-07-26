.DEFAULT_GOAL := all

########################
## Internal variables
########################
GIT_HOST=github.com
REGISTRY_HOST=gcr.io
ORG_NAME=canary-health
REPO_NAME=idp
HOST_PORT=8080
CONTAINER_PORT=8080
APP_POSTGRES_USER=idp_app_user
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=canary_health
POSTGRES_HOST_PORT=5432
PROJECT_PATH=${GIT_HOST}/${ORG_NAME}/${REPO_NAME}
SUPER_USER_DB_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?sslmode\=disable\&search_path\=${REPO_NAME}

########################
## Docker Image Name
########################
ifdef COMMIT_SHA
  IMAGE_NAME=${REGISTRY_HOST}/${ORG_NAME}/${REPO_NAME}:${COMMIT_SHA}
else
  IMAGE_NAME=${REGISTRY_HOST}/${ORG_NAME}/${REPO_NAME}:development
endif

########################
## External Variables
########################
$(shell echo IMAGE_NAME=${IMAGE_NAME} > .env)
$(shell echo PROJECT_PATH=${GIT_HOST}/${ORG_NAME}/${REPO_NAME} >> .env)
$(shell echo REPO_NAME=${REPO_NAME} >> .env)
$(shell echo SERVER_ADDR=":${CONTAINER_PORT}" >> .env)
$(shell echo CONTAINER_PORT=${CONTAINER_PORT} >> .env)
$(shell echo PORTS=${HOST_PORT}:${CONTAINER_PORT} >> .env)
$(shell echo POSTGRES_USER=${POSTGRES_USER} >> .env)
$(shell echo POSTGRES_PASSWORD=${POSTGRES_PASSWORD} >> .env)
$(shell echo POSTGRES_DB=${POSTGRES_DB} >> .env)
$(shell echo POSTGRES_HOST_PORT=${POSTGRES_HOST_PORT} >> .env)
$(shell echo APP_DB_URL=postgres://${APP_POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?sslmode\=disable\&search_path\=${REPO_NAME} >> .env)

########################
## Helpers variables
########################
M=$(shell printf "\033[34;1m▶\033[0m")
TIMESTAMP := $(shell /bin/date "+%Y-%m-%d_%H-%M-%S")

########################
## Start Commands
########################
.PHONY: all dev

all: pb build-server build-image ; $(info $(M) Initializing project complete... )

dev: compose-build compose-up migrate-up ; $(info $(M) Setting up project development env complete...

######
## App server commands
######
.PHONY: setup dep build-server run-server

setup: ; $(info $(M) Fetching github.com/twitchtv/retool...)
	go get -u github.com/twitchtv/retool
	
dep: setup ; $(info $(M) Ensuring vendored dependencies are up-to-date...)
	retool sync

build-server: dep ; $(info $(M) Building project server...)
	CGO_ENABLED=0 GOOS=linux retool do go build -o ./bin/$(REPO_NAME) ./cmd/server 

run-server: setup ; $(info $(M) Starting development server...)
	retool do realize start

######
## Docker commands
######
.PHONY: build-image run-container compose-build compose-up compose-down compose-test	

build-image: ; $(info $(M) Building docker image...)
	docker build -t $(IMAGE_NAME) .

run-container: ; $(info $(M) Running docker container...)
	docker run -p $(PORTS) $(IMAGE_NAME)

compose-build: rm-tools ; $(info $(M) Running application with docker-compose...)
	sudo docker-compose run --rm server make build-server

compose-up: ; $(info $(M) Running application with docker-compose...)
	sudo docker-compose up -d
	
compose-down: ; $(info $(M) Stopping application with docker-compose...)
	sudo docker-compose down

compose-test: ; $(info $(M) Running tests with docker-compose...)
	sudo docker-compose run --rm server make test

######
## Database commands
######
.PHONY: migrate-up migrate-force-up migrate-down

migrate-up: ;
	docker run --rm -v $$GOPATH/src/$(GIT_HOST)/$(ORG_NAME)/$(REPO_NAME)/internal/database/migrations/:/migrations/ --network host migrate/migrate -path=/migrations/ -database $(SUPER_USER_DB_URL) up

migrate-down: ;
	docker run --rm -v $$GOPATH/src/$(GIT_HOST)/$(ORG_NAME)/$(REPO_NAME)/internal/database/migrations/:/migrations/ --network host migrate/migrate -path=/migrations/ -database $(SUPER_USER_DB_URL) down

## Sets clean version in schema_migrations table. 
## Takes param v={{version}} e.g. v=400
migrate-force: ;
	docker run -v $$GOPATH/src/$(GIT_HOST)/$(ORG_NAME)/$(REPO_NAME)/internal/database/migrations/:/migrations/ --network host migrate/migrate -path=/migrations/ -database $(SUPER_USER_DB_URL) force $(v)

#####
## Protobuf commands
#####
.PHONY: pb 

pb: rm-pb; $(info $(M) Generating protobuf files ...)
	for dir in ./_rpc/*; do \
		go generate $$dir/gen.go; \
		echo Generating: $$dir; \
	done

######
## Test commands
######
.PHONY: test test-coverage test-coverage-html

test: rm-coverage; $(info $(M) Running application tests...)
	go test ./... -cover -covermode=count -coverprofile=coverage.out

test-coverage: ;
	go tool cover -func=coverage.out

test-coverage-html: ;
	go tool cover -html=coverage.out

######
## Release commands
######
.PHONY: ship deploy

ship:
	gcloud docker -- push $(IMAGE_NAME)

deploy:
	sed -i '.bak' 's/timestamp/${TIMESTAMP}/g' k8s/deployment.yml; \
	kubectl apply -f k8s/deployment.yml; \
	sed -i '.bak' 's/${TIMESTAMP}/timestamp/g' k8s/deployment.yml; \
	rm k8s/deployment.yml.bak


######
## Clean up commands
######
.PHONY: clean rm-bin rm-pb rm-tools rm-coverage

clean: rm-bin rm-pb rm-tools rm-coverage; $(info $(M) Removing ALL generated files... )

rm-bin: ; $(info $(M) Removing ./bin files... )
	sudo rm -rf ./bin

rm-pb: ; $(info $(M) Removing generated protobuf files... )
	for tw in ./_rpc/**/*.twirp.go; do \
		$(RM) $$tw; \
		echo Removed: $$tw; \
	done
	for pb in ./_rpc/**/*.pb.go; do \
		$(RM) $$pb; \
		echo Removed: $$pb; \
	done

rm-tools: ; $(info $(M) Removing ./_tools files... )
	sudo rm -rf ./_tools

rm-coverage: ; $(info $(M) Removing coverage.out files... )
	$(RM) ./coverage.out
