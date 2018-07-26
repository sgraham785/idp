FROM golang:1.10 AS build

WORKDIR /go/src/github.com/canary-health/idp/
COPY . .

RUN make build-server

FROM scratch
WORKDIR /go/bin
COPY --from=build /go/bin/idp /go/bin/
ENTRYPOINT ["./idp"]
# EXPOSE 8080
