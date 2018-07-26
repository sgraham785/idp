package service

import "github.com/twitchtv/twirp"

// Define Error messages here for reuse in service
var errEmailAndPasswordRequired = twirp.RequiredArgumentError("EmailAndPassword")
var errPasswordAndVerifyPasswordDoNotMatch = twirp.NewError(twirp.FailedPrecondition, "Password and Verify Password do not match")
var errEmailMalformed = twirp.NewError(twirp.FailedPrecondition, "Email does not meet the requirements")
var errPasswordMalformed = twirp.NewError(twirp.FailedPrecondition, "Password does not meet the requirements")
var errServiceSlugRequired = twirp.RequiredArgumentError("ServiceSlug")
var errUserUUIDRequired = twirp.RequiredArgumentError("UserUUID")
var errEmailOrPasswordInvalid = twirp.NotFoundError("Failed authentication")
var errNotFoundError = twirp.NotFoundError("No results found")
