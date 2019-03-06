package errmsg

import "github.com/twitchtv/twirp"

// Define Error messages here for reuse in service
var EmailAndPasswordRequired = twirp.RequiredArgumentError("EmailAndPassword")
var PasswordAndVerifyPasswordDoNotMatch = twirp.NewError(twirp.FailedPrecondition, "Password and Verify Password do not match")
var EmailMalformed = twirp.NewError(twirp.FailedPrecondition, "Email does not meet the requirements")
var PasswordMalformed = twirp.NewError(twirp.FailedPrecondition, "Password does not meet the requirements")
var ServiceSlugRequired = twirp.RequiredArgumentError("ServiceSlug")
var UserUUIDRequired = twirp.RequiredArgumentError("UserUUID")
var EmailOrPasswordInvalid = twirp.NotFoundError("Failed authentication")
var NotFoundError = twirp.NotFoundError("No results found")
