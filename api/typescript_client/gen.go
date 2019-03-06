package typescriptclient

//go:generate pbjs -t static-module -w commonjs --keep-case -o lib/idp.js ../../internal/user/user.proto ../../profile/profile.proto ../../personal_info/personal_info.proto ../../../../../gogo/protobuf/protobuf/google/protobuf/timestamp.proto ../../../../../canary-health/protobuf/types/atTimestamps.proto

//go:generate pbts -o lib/idp.d.ts lib/idp.js
