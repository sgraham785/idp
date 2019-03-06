package profile

//go:generate protoc --proto_path=$GOPATH/src:. --twirp_out=. --twirp_swagger_out=../../api/swagger-spec --gogofaster_out=Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types:. ./profile.proto

//go:generate sed -i "" "s/golang/gogo/g" profile.twirp.go
