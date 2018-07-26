package users

//go:generate protoc --proto_path=$GOPATH/src:. --twirp_out=. --twirp_swagger_out=. --gogofaster_out=Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types:. ./users.proto

//go:generate sed -i "" "s/golang/gogo/g" users.twirp.go
