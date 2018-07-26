// Code generated by protoc-gen-twirp v5.3.0, DO NOT EDIT.
// source: users.proto

/*
Package users is a generated twirp stub package.
This code was generated with github.com/twitchtv/twirp/protoc-gen-twirp v5.3.0.

It is generated from these files:
	users.proto
*/
package users

import bytes "bytes"
import strings "strings"
import context "context"
import fmt "fmt"
import ioutil "io/ioutil"
import http "net/http"

import jsonpb "github.com/gogo/protobuf/jsonpb"
import proto "github.com/gogo/protobuf/proto"
import twirp "github.com/twitchtv/twirp"
import ctxsetters "github.com/twitchtv/twirp/ctxsetters"

// Imports only used by utility functions:
import io "io"
import strconv "strconv"
import json "encoding/json"
import url "net/url"

// ===============
// Users Interface
// ===============

// Users
type Users interface {
	// UpsertUser inserts or updates a user wih given options
	UpsertUser(context.Context, *UpsertUserOpts) (*UserUUID, error)

	// AuthUserByEmailAndPassword fetches and returns an User UUID for the given opts
	AuthUserByEmailAndPassword(context.Context, *AuthUserByEmailAndPasswordOpts) (*UserUUID, error)
}

// =====================
// Users Protobuf Client
// =====================

type usersProtobufClient struct {
	client HTTPClient
	urls   [2]string
}

// NewUsersProtobufClient creates a Protobuf client that implements the Users interface.
// It communicates using Protobuf and can be configured with a custom HTTPClient.
func NewUsersProtobufClient(addr string, client HTTPClient) Users {
	prefix := urlBase(addr) + UsersPathPrefix
	urls := [2]string{
		prefix + "UpsertUser",
		prefix + "AuthUserByEmailAndPassword",
	}
	if httpClient, ok := client.(*http.Client); ok {
		return &usersProtobufClient{
			client: withoutRedirects(httpClient),
			urls:   urls,
		}
	}
	return &usersProtobufClient{
		client: client,
		urls:   urls,
	}
}

func (c *usersProtobufClient) UpsertUser(ctx context.Context, in *UpsertUserOpts) (*UserUUID, error) {
	ctx = ctxsetters.WithPackageName(ctx, "canaryhealth.idp.users")
	ctx = ctxsetters.WithServiceName(ctx, "Users")
	ctx = ctxsetters.WithMethodName(ctx, "UpsertUser")
	out := new(UserUUID)
	err := doProtobufRequest(ctx, c.client, c.urls[0], in, out)
	return out, err
}

func (c *usersProtobufClient) AuthUserByEmailAndPassword(ctx context.Context, in *AuthUserByEmailAndPasswordOpts) (*UserUUID, error) {
	ctx = ctxsetters.WithPackageName(ctx, "canaryhealth.idp.users")
	ctx = ctxsetters.WithServiceName(ctx, "Users")
	ctx = ctxsetters.WithMethodName(ctx, "AuthUserByEmailAndPassword")
	out := new(UserUUID)
	err := doProtobufRequest(ctx, c.client, c.urls[1], in, out)
	return out, err
}

// =================
// Users JSON Client
// =================

type usersJSONClient struct {
	client HTTPClient
	urls   [2]string
}

// NewUsersJSONClient creates a JSON client that implements the Users interface.
// It communicates using JSON and can be configured with a custom HTTPClient.
func NewUsersJSONClient(addr string, client HTTPClient) Users {
	prefix := urlBase(addr) + UsersPathPrefix
	urls := [2]string{
		prefix + "UpsertUser",
		prefix + "AuthUserByEmailAndPassword",
	}
	if httpClient, ok := client.(*http.Client); ok {
		return &usersJSONClient{
			client: withoutRedirects(httpClient),
			urls:   urls,
		}
	}
	return &usersJSONClient{
		client: client,
		urls:   urls,
	}
}

func (c *usersJSONClient) UpsertUser(ctx context.Context, in *UpsertUserOpts) (*UserUUID, error) {
	ctx = ctxsetters.WithPackageName(ctx, "canaryhealth.idp.users")
	ctx = ctxsetters.WithServiceName(ctx, "Users")
	ctx = ctxsetters.WithMethodName(ctx, "UpsertUser")
	out := new(UserUUID)
	err := doJSONRequest(ctx, c.client, c.urls[0], in, out)
	return out, err
}

func (c *usersJSONClient) AuthUserByEmailAndPassword(ctx context.Context, in *AuthUserByEmailAndPasswordOpts) (*UserUUID, error) {
	ctx = ctxsetters.WithPackageName(ctx, "canaryhealth.idp.users")
	ctx = ctxsetters.WithServiceName(ctx, "Users")
	ctx = ctxsetters.WithMethodName(ctx, "AuthUserByEmailAndPassword")
	out := new(UserUUID)
	err := doJSONRequest(ctx, c.client, c.urls[1], in, out)
	return out, err
}

// ====================
// Users Server Handler
// ====================

type usersServer struct {
	Users
	hooks *twirp.ServerHooks
}

func NewUsersServer(svc Users, hooks *twirp.ServerHooks) TwirpServer {
	return &usersServer{
		Users: svc,
		hooks: hooks,
	}
}

// writeError writes an HTTP response with a valid Twirp error format, and triggers hooks.
// If err is not a twirp.Error, it will get wrapped with twirp.InternalErrorWith(err)
func (s *usersServer) writeError(ctx context.Context, resp http.ResponseWriter, err error) {
	writeError(ctx, resp, err, s.hooks)
}

// UsersPathPrefix is used for all URL paths on a twirp Users server.
// Requests are always: POST UsersPathPrefix/method
// It can be used in an HTTP mux to route twirp requests along with non-twirp requests on other routes.
const UsersPathPrefix = "/twirp/canaryhealth.idp.users.Users/"

func (s *usersServer) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
	ctx := req.Context()
	ctx = ctxsetters.WithPackageName(ctx, "canaryhealth.idp.users")
	ctx = ctxsetters.WithServiceName(ctx, "Users")
	ctx = ctxsetters.WithResponseWriter(ctx, resp)

	var err error
	ctx, err = callRequestReceived(ctx, s.hooks)
	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}

	if req.Method != "POST" {
		msg := fmt.Sprintf("unsupported method %q (only POST is allowed)", req.Method)
		err = badRouteError(msg, req.Method, req.URL.Path)
		s.writeError(ctx, resp, err)
		return
	}

	switch req.URL.Path {
	case "/twirp/canaryhealth.idp.users.Users/UpsertUser":
		s.serveUpsertUser(ctx, resp, req)
		return
	case "/twirp/canaryhealth.idp.users.Users/AuthUserByEmailAndPassword":
		s.serveAuthUserByEmailAndPassword(ctx, resp, req)
		return
	default:
		msg := fmt.Sprintf("no handler for path %q", req.URL.Path)
		err = badRouteError(msg, req.Method, req.URL.Path)
		s.writeError(ctx, resp, err)
		return
	}
}

func (s *usersServer) serveUpsertUser(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	header := req.Header.Get("Content-Type")
	i := strings.Index(header, ";")
	if i == -1 {
		i = len(header)
	}
	switch strings.TrimSpace(strings.ToLower(header[:i])) {
	case "application/json":
		s.serveUpsertUserJSON(ctx, resp, req)
	case "application/protobuf":
		s.serveUpsertUserProtobuf(ctx, resp, req)
	default:
		msg := fmt.Sprintf("unexpected Content-Type: %q", req.Header.Get("Content-Type"))
		twerr := badRouteError(msg, req.Method, req.URL.Path)
		s.writeError(ctx, resp, twerr)
	}
}

func (s *usersServer) serveUpsertUserJSON(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	var err error
	ctx = ctxsetters.WithMethodName(ctx, "UpsertUser")
	ctx, err = callRequestRouted(ctx, s.hooks)
	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}

	reqContent := new(UpsertUserOpts)
	unmarshaler := jsonpb.Unmarshaler{AllowUnknownFields: true}
	if err = unmarshaler.Unmarshal(req.Body, reqContent); err != nil {
		err = wrapErr(err, "failed to parse request json")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	// Call service method
	var respContent *UserUUID
	func() {
		defer func() {
			// In case of a panic, serve a 500 error and then panic.
			if r := recover(); r != nil {
				s.writeError(ctx, resp, twirp.InternalError("Internal service panic"))
				panic(r)
			}
		}()
		respContent, err = s.UpsertUser(ctx, reqContent)
	}()

	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}
	if respContent == nil {
		s.writeError(ctx, resp, twirp.InternalError("received a nil *UserUUID and nil error while calling UpsertUser. nil responses are not supported"))
		return
	}

	ctx = callResponsePrepared(ctx, s.hooks)

	var buf bytes.Buffer
	marshaler := &jsonpb.Marshaler{OrigName: true}
	if err = marshaler.Marshal(&buf, respContent); err != nil {
		err = wrapErr(err, "failed to marshal json response")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	ctx = ctxsetters.WithStatusCode(ctx, http.StatusOK)
	resp.Header().Set("Content-Type", "application/json")
	resp.WriteHeader(http.StatusOK)

	respBytes := buf.Bytes()
	if n, err := resp.Write(respBytes); err != nil {
		msg := fmt.Sprintf("failed to write response, %d of %d bytes written: %s", n, len(respBytes), err.Error())
		twerr := twirp.NewError(twirp.Unknown, msg)
		callError(ctx, s.hooks, twerr)
	}
	callResponseSent(ctx, s.hooks)
}

func (s *usersServer) serveUpsertUserProtobuf(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	var err error
	ctx = ctxsetters.WithMethodName(ctx, "UpsertUser")
	ctx, err = callRequestRouted(ctx, s.hooks)
	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}

	buf, err := ioutil.ReadAll(req.Body)
	if err != nil {
		err = wrapErr(err, "failed to read request body")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}
	reqContent := new(UpsertUserOpts)
	if err = proto.Unmarshal(buf, reqContent); err != nil {
		err = wrapErr(err, "failed to parse request proto")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	// Call service method
	var respContent *UserUUID
	func() {
		defer func() {
			// In case of a panic, serve a 500 error and then panic.
			if r := recover(); r != nil {
				s.writeError(ctx, resp, twirp.InternalError("Internal service panic"))
				panic(r)
			}
		}()
		respContent, err = s.UpsertUser(ctx, reqContent)
	}()

	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}
	if respContent == nil {
		s.writeError(ctx, resp, twirp.InternalError("received a nil *UserUUID and nil error while calling UpsertUser. nil responses are not supported"))
		return
	}

	ctx = callResponsePrepared(ctx, s.hooks)

	respBytes, err := proto.Marshal(respContent)
	if err != nil {
		err = wrapErr(err, "failed to marshal proto response")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	ctx = ctxsetters.WithStatusCode(ctx, http.StatusOK)
	resp.Header().Set("Content-Type", "application/protobuf")
	resp.WriteHeader(http.StatusOK)
	if n, err := resp.Write(respBytes); err != nil {
		msg := fmt.Sprintf("failed to write response, %d of %d bytes written: %s", n, len(respBytes), err.Error())
		twerr := twirp.NewError(twirp.Unknown, msg)
		callError(ctx, s.hooks, twerr)
	}
	callResponseSent(ctx, s.hooks)
}

func (s *usersServer) serveAuthUserByEmailAndPassword(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	header := req.Header.Get("Content-Type")
	i := strings.Index(header, ";")
	if i == -1 {
		i = len(header)
	}
	switch strings.TrimSpace(strings.ToLower(header[:i])) {
	case "application/json":
		s.serveAuthUserByEmailAndPasswordJSON(ctx, resp, req)
	case "application/protobuf":
		s.serveAuthUserByEmailAndPasswordProtobuf(ctx, resp, req)
	default:
		msg := fmt.Sprintf("unexpected Content-Type: %q", req.Header.Get("Content-Type"))
		twerr := badRouteError(msg, req.Method, req.URL.Path)
		s.writeError(ctx, resp, twerr)
	}
}

func (s *usersServer) serveAuthUserByEmailAndPasswordJSON(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	var err error
	ctx = ctxsetters.WithMethodName(ctx, "AuthUserByEmailAndPassword")
	ctx, err = callRequestRouted(ctx, s.hooks)
	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}

	reqContent := new(AuthUserByEmailAndPasswordOpts)
	unmarshaler := jsonpb.Unmarshaler{AllowUnknownFields: true}
	if err = unmarshaler.Unmarshal(req.Body, reqContent); err != nil {
		err = wrapErr(err, "failed to parse request json")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	// Call service method
	var respContent *UserUUID
	func() {
		defer func() {
			// In case of a panic, serve a 500 error and then panic.
			if r := recover(); r != nil {
				s.writeError(ctx, resp, twirp.InternalError("Internal service panic"))
				panic(r)
			}
		}()
		respContent, err = s.AuthUserByEmailAndPassword(ctx, reqContent)
	}()

	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}
	if respContent == nil {
		s.writeError(ctx, resp, twirp.InternalError("received a nil *UserUUID and nil error while calling AuthUserByEmailAndPassword. nil responses are not supported"))
		return
	}

	ctx = callResponsePrepared(ctx, s.hooks)

	var buf bytes.Buffer
	marshaler := &jsonpb.Marshaler{OrigName: true}
	if err = marshaler.Marshal(&buf, respContent); err != nil {
		err = wrapErr(err, "failed to marshal json response")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	ctx = ctxsetters.WithStatusCode(ctx, http.StatusOK)
	resp.Header().Set("Content-Type", "application/json")
	resp.WriteHeader(http.StatusOK)

	respBytes := buf.Bytes()
	if n, err := resp.Write(respBytes); err != nil {
		msg := fmt.Sprintf("failed to write response, %d of %d bytes written: %s", n, len(respBytes), err.Error())
		twerr := twirp.NewError(twirp.Unknown, msg)
		callError(ctx, s.hooks, twerr)
	}
	callResponseSent(ctx, s.hooks)
}

func (s *usersServer) serveAuthUserByEmailAndPasswordProtobuf(ctx context.Context, resp http.ResponseWriter, req *http.Request) {
	var err error
	ctx = ctxsetters.WithMethodName(ctx, "AuthUserByEmailAndPassword")
	ctx, err = callRequestRouted(ctx, s.hooks)
	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}

	buf, err := ioutil.ReadAll(req.Body)
	if err != nil {
		err = wrapErr(err, "failed to read request body")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}
	reqContent := new(AuthUserByEmailAndPasswordOpts)
	if err = proto.Unmarshal(buf, reqContent); err != nil {
		err = wrapErr(err, "failed to parse request proto")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	// Call service method
	var respContent *UserUUID
	func() {
		defer func() {
			// In case of a panic, serve a 500 error and then panic.
			if r := recover(); r != nil {
				s.writeError(ctx, resp, twirp.InternalError("Internal service panic"))
				panic(r)
			}
		}()
		respContent, err = s.AuthUserByEmailAndPassword(ctx, reqContent)
	}()

	if err != nil {
		s.writeError(ctx, resp, err)
		return
	}
	if respContent == nil {
		s.writeError(ctx, resp, twirp.InternalError("received a nil *UserUUID and nil error while calling AuthUserByEmailAndPassword. nil responses are not supported"))
		return
	}

	ctx = callResponsePrepared(ctx, s.hooks)

	respBytes, err := proto.Marshal(respContent)
	if err != nil {
		err = wrapErr(err, "failed to marshal proto response")
		s.writeError(ctx, resp, twirp.InternalErrorWith(err))
		return
	}

	ctx = ctxsetters.WithStatusCode(ctx, http.StatusOK)
	resp.Header().Set("Content-Type", "application/protobuf")
	resp.WriteHeader(http.StatusOK)
	if n, err := resp.Write(respBytes); err != nil {
		msg := fmt.Sprintf("failed to write response, %d of %d bytes written: %s", n, len(respBytes), err.Error())
		twerr := twirp.NewError(twirp.Unknown, msg)
		callError(ctx, s.hooks, twerr)
	}
	callResponseSent(ctx, s.hooks)
}

func (s *usersServer) ServiceDescriptor() ([]byte, int) {
	return twirpFileDescriptor0, 0
}

func (s *usersServer) ProtocGenTwirpVersion() string {
	return "v5.3.0"
}

// =====
// Utils
// =====

// HTTPClient is the interface used by generated clients to send HTTP requests.
// It is fulfilled by *(net/http).Client, which is sufficient for most users.
// Users can provide their own implementation for special retry policies.
//
// HTTPClient implementations should not follow redirects. Redirects are
// automatically disabled if *(net/http).Client is passed to client
// constructors. See the withoutRedirects function in this file for more
// details.
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// TwirpServer is the interface generated server structs will support: they're
// HTTP handlers with additional methods for accessing metadata about the
// service. Those accessors are a low-level API for building reflection tools.
// Most people can think of TwirpServers as just http.Handlers.
type TwirpServer interface {
	http.Handler
	// ServiceDescriptor returns gzipped bytes describing the .proto file that
	// this service was generated from. Once unzipped, the bytes can be
	// unmarshalled as a
	// github.com/gogo/protobuf/protoc-gen-go/descriptor.FileDescriptorProto.
	//
	// The returned integer is the index of this particular service within that
	// FileDescriptorProto's 'Service' slice of ServiceDescriptorProtos. This is a
	// low-level field, expected to be used for reflection.
	ServiceDescriptor() ([]byte, int)
	// ProtocGenTwirpVersion is the semantic version string of the version of
	// twirp used to generate this file.
	ProtocGenTwirpVersion() string
}

// WriteError writes an HTTP response with a valid Twirp error format.
// If err is not a twirp.Error, it will get wrapped with twirp.InternalErrorWith(err)
func WriteError(resp http.ResponseWriter, err error) {
	writeError(context.Background(), resp, err, nil)
}

// writeError writes Twirp errors in the response and triggers hooks.
func writeError(ctx context.Context, resp http.ResponseWriter, err error, hooks *twirp.ServerHooks) {
	// Non-twirp errors are wrapped as Internal (default)
	twerr, ok := err.(twirp.Error)
	if !ok {
		twerr = twirp.InternalErrorWith(err)
	}

	statusCode := twirp.ServerHTTPStatusFromErrorCode(twerr.Code())
	ctx = ctxsetters.WithStatusCode(ctx, statusCode)
	ctx = callError(ctx, hooks, twerr)

	resp.Header().Set("Content-Type", "application/json") // Error responses are always JSON (instead of protobuf)
	resp.WriteHeader(statusCode)                          // HTTP response status code

	respBody := marshalErrorToJSON(twerr)
	_, writeErr := resp.Write(respBody)
	if writeErr != nil {
		// We have three options here. We could log the error, call the Error
		// hook, or just silently ignore the error.
		//
		// Logging is unacceptable because we don't have a user-controlled
		// logger; writing out to stderr without permission is too rude.
		//
		// Calling the Error hook would confuse users: it would mean the Error
		// hook got called twice for one request, which is likely to lead to
		// duplicated log messages and metrics, no matter how well we document
		// the behavior.
		//
		// Silently ignoring the error is our least-bad option. It's highly
		// likely that the connection is broken and the original 'err' says
		// so anyway.
		_ = writeErr
	}

	callResponseSent(ctx, hooks)
}

// urlBase helps ensure that addr specifies a scheme. If it is unparsable
// as a URL, it returns addr unchanged.
func urlBase(addr string) string {
	// If the addr specifies a scheme, use it. If not, default to
	// http. If url.Parse fails on it, return it unchanged.
	url, err := url.Parse(addr)
	if err != nil {
		return addr
	}
	if url.Scheme == "" {
		url.Scheme = "http"
	}
	return url.String()
}

// getCustomHTTPReqHeaders retrieves a copy of any headers that are set in
// a context through the twirp.WithHTTPRequestHeaders function.
// If there are no headers set, or if they have the wrong type, nil is returned.
func getCustomHTTPReqHeaders(ctx context.Context) http.Header {
	header, ok := twirp.HTTPRequestHeaders(ctx)
	if !ok || header == nil {
		return nil
	}
	copied := make(http.Header)
	for k, vv := range header {
		if vv == nil {
			copied[k] = nil
			continue
		}
		copied[k] = make([]string, len(vv))
		copy(copied[k], vv)
	}
	return copied
}

// newRequest makes an http.Request from a client, adding common headers.
func newRequest(ctx context.Context, url string, reqBody io.Reader, contentType string) (*http.Request, error) {
	req, err := http.NewRequest("POST", url, reqBody)
	if err != nil {
		return nil, err
	}
	req = req.WithContext(ctx)
	if customHeader := getCustomHTTPReqHeaders(ctx); customHeader != nil {
		req.Header = customHeader
	}
	req.Header.Set("Accept", contentType)
	req.Header.Set("Content-Type", contentType)
	req.Header.Set("Twirp-Version", "v5.3.0")
	return req, nil
}

// JSON serialization for errors
type twerrJSON struct {
	Code string            `json:"code"`
	Msg  string            `json:"msg"`
	Meta map[string]string `json:"meta,omitempty"`
}

// marshalErrorToJSON returns JSON from a twirp.Error, that can be used as HTTP error response body.
// If serialization fails, it will use a descriptive Internal error instead.
func marshalErrorToJSON(twerr twirp.Error) []byte {
	// make sure that msg is not too large
	msg := twerr.Msg()
	if len(msg) > 1e6 {
		msg = msg[:1e6]
	}

	tj := twerrJSON{
		Code: string(twerr.Code()),
		Msg:  msg,
		Meta: twerr.MetaMap(),
	}

	buf, err := json.Marshal(&tj)
	if err != nil {
		buf = []byte("{\"type\": \"" + twirp.Internal + "\", \"msg\": \"There was an error but it could not be serialized into JSON\"}") // fallback
	}

	return buf
}

// errorFromResponse builds a twirp.Error from a non-200 HTTP response.
// If the response has a valid serialized Twirp error, then it's returned.
// If not, the response status code is used to generate a similar twirp
// error. See twirpErrorFromIntermediary for more info on intermediary errors.
func errorFromResponse(resp *http.Response) twirp.Error {
	statusCode := resp.StatusCode
	statusText := http.StatusText(statusCode)

	if isHTTPRedirect(statusCode) {
		// Unexpected redirect: it must be an error from an intermediary.
		// Twirp clients don't follow redirects automatically, Twirp only handles
		// POST requests, redirects should only happen on GET and HEAD requests.
		location := resp.Header.Get("Location")
		msg := fmt.Sprintf("unexpected HTTP status code %d %q received, Location=%q", statusCode, statusText, location)
		return twirpErrorFromIntermediary(statusCode, msg, location)
	}

	respBodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return clientError("failed to read server error response body", err)
	}
	var tj twerrJSON
	if err := json.Unmarshal(respBodyBytes, &tj); err != nil {
		// Invalid JSON response; it must be an error from an intermediary.
		msg := fmt.Sprintf("Error from intermediary with HTTP status code %d %q", statusCode, statusText)
		return twirpErrorFromIntermediary(statusCode, msg, string(respBodyBytes))
	}

	errorCode := twirp.ErrorCode(tj.Code)
	if !twirp.IsValidErrorCode(errorCode) {
		msg := "invalid type returned from server error response: " + tj.Code
		return twirp.InternalError(msg)
	}

	twerr := twirp.NewError(errorCode, tj.Msg)
	for k, v := range tj.Meta {
		twerr = twerr.WithMeta(k, v)
	}
	return twerr
}

// twirpErrorFromIntermediary maps HTTP errors from non-twirp sources to twirp errors.
// The mapping is similar to gRPC: https://github.com/grpc/grpc/blob/master/doc/http-grpc-status-mapping.md.
// Returned twirp Errors have some additional metadata for inspection.
func twirpErrorFromIntermediary(status int, msg string, bodyOrLocation string) twirp.Error {
	var code twirp.ErrorCode
	if isHTTPRedirect(status) { // 3xx
		code = twirp.Internal
	} else {
		switch status {
		case 400: // Bad Request
			code = twirp.Internal
		case 401: // Unauthorized
			code = twirp.Unauthenticated
		case 403: // Forbidden
			code = twirp.PermissionDenied
		case 404: // Not Found
			code = twirp.BadRoute
		case 429, 502, 503, 504: // Too Many Requests, Bad Gateway, Service Unavailable, Gateway Timeout
			code = twirp.Unavailable
		default: // All other codes
			code = twirp.Unknown
		}
	}

	twerr := twirp.NewError(code, msg)
	twerr = twerr.WithMeta("http_error_from_intermediary", "true") // to easily know if this error was from intermediary
	twerr = twerr.WithMeta("status_code", strconv.Itoa(status))
	if isHTTPRedirect(status) {
		twerr = twerr.WithMeta("location", bodyOrLocation)
	} else {
		twerr = twerr.WithMeta("body", bodyOrLocation)
	}
	return twerr
}
func isHTTPRedirect(status int) bool {
	return status >= 300 && status <= 399
}

// wrappedError implements the github.com/pkg/errors.Causer interface, allowing errors to be
// examined for their root cause.
type wrappedError struct {
	msg   string
	cause error
}

func wrapErr(err error, msg string) error { return &wrappedError{msg: msg, cause: err} }
func (e *wrappedError) Cause() error      { return e.cause }
func (e *wrappedError) Error() string     { return e.msg + ": " + e.cause.Error() }

// clientError adds consistency to errors generated in the client
func clientError(desc string, err error) twirp.Error {
	return twirp.InternalErrorWith(wrapErr(err, desc))
}

// badRouteError is used when the twirp server cannot route a request
func badRouteError(msg string, method, url string) twirp.Error {
	err := twirp.NewError(twirp.BadRoute, msg)
	err = err.WithMeta("twirp_invalid_route", method+" "+url)
	return err
}

// The standard library will, by default, redirect requests (including POSTs) if it gets a 302 or
// 303 response, and also 301s in go1.8. It redirects by making a second request, changing the
// method to GET and removing the body. This produces very confusing error messages, so instead we
// set a redirect policy that always errors. This stops Go from executing the redirect.
//
// We have to be a little careful in case the user-provided http.Client has its own CheckRedirect
// policy - if so, we'll run through that policy first.
//
// Because this requires modifying the http.Client, we make a new copy of the client and return it.
func withoutRedirects(in *http.Client) *http.Client {
	copy := *in
	copy.CheckRedirect = func(req *http.Request, via []*http.Request) error {
		if in.CheckRedirect != nil {
			// Run the input's redirect if it exists, in case it has side effects, but ignore any error it
			// returns, since we want to use ErrUseLastResponse.
			err := in.CheckRedirect(req, via)
			_ = err // Silly, but this makes sure generated code passes errcheck -blank, which some people use.
		}
		return http.ErrUseLastResponse
	}
	return &copy
}

// doProtobufRequest is common code to make a request to the remote twirp service.
func doProtobufRequest(ctx context.Context, client HTTPClient, url string, in, out proto.Message) (err error) {
	reqBodyBytes, err := proto.Marshal(in)
	if err != nil {
		return clientError("failed to marshal proto request", err)
	}
	reqBody := bytes.NewBuffer(reqBodyBytes)
	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}

	req, err := newRequest(ctx, url, reqBody, "application/protobuf")
	if err != nil {
		return clientError("could not build request", err)
	}
	resp, err := client.Do(req)
	if err != nil {
		return clientError("failed to do request", err)
	}

	defer func() {
		cerr := resp.Body.Close()
		if err == nil && cerr != nil {
			err = clientError("failed to close response body", cerr)
		}
	}()

	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}

	if resp.StatusCode != 200 {
		return errorFromResponse(resp)
	}

	respBodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return clientError("failed to read response body", err)
	}
	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}

	if err = proto.Unmarshal(respBodyBytes, out); err != nil {
		return clientError("failed to unmarshal proto response", err)
	}
	return nil
}

// doJSONRequest is common code to make a request to the remote twirp service.
func doJSONRequest(ctx context.Context, client HTTPClient, url string, in, out proto.Message) (err error) {
	reqBody := bytes.NewBuffer(nil)
	marshaler := &jsonpb.Marshaler{OrigName: true}
	if err = marshaler.Marshal(reqBody, in); err != nil {
		return clientError("failed to marshal json request", err)
	}
	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}

	req, err := newRequest(ctx, url, reqBody, "application/json")
	if err != nil {
		return clientError("could not build request", err)
	}
	resp, err := client.Do(req)
	if err != nil {
		return clientError("failed to do request", err)
	}

	defer func() {
		cerr := resp.Body.Close()
		if err == nil && cerr != nil {
			err = clientError("failed to close response body", cerr)
		}
	}()

	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}

	if resp.StatusCode != 200 {
		return errorFromResponse(resp)
	}

	unmarshaler := jsonpb.Unmarshaler{AllowUnknownFields: true}
	if err = unmarshaler.Unmarshal(resp.Body, out); err != nil {
		return clientError("failed to unmarshal json response", err)
	}
	if err = ctx.Err(); err != nil {
		return clientError("aborted because context was done", err)
	}
	return nil
}

// Call twirp.ServerHooks.RequestReceived if the hook is available
func callRequestReceived(ctx context.Context, h *twirp.ServerHooks) (context.Context, error) {
	if h == nil || h.RequestReceived == nil {
		return ctx, nil
	}
	return h.RequestReceived(ctx)
}

// Call twirp.ServerHooks.RequestRouted if the hook is available
func callRequestRouted(ctx context.Context, h *twirp.ServerHooks) (context.Context, error) {
	if h == nil || h.RequestRouted == nil {
		return ctx, nil
	}
	return h.RequestRouted(ctx)
}

// Call twirp.ServerHooks.ResponsePrepared if the hook is available
func callResponsePrepared(ctx context.Context, h *twirp.ServerHooks) context.Context {
	if h == nil || h.ResponsePrepared == nil {
		return ctx
	}
	return h.ResponsePrepared(ctx)
}

// Call twirp.ServerHooks.ResponseSent if the hook is available
func callResponseSent(ctx context.Context, h *twirp.ServerHooks) {
	if h == nil || h.ResponseSent == nil {
		return
	}
	h.ResponseSent(ctx)
}

// Call twirp.ServerHooks.Error if the hook is available
func callError(ctx context.Context, h *twirp.ServerHooks, err twirp.Error) context.Context {
	if h == nil || h.Error == nil {
		return ctx
	}
	return h.Error(ctx, err)
}

var twirpFileDescriptor0 = []byte{
	// 584 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xd4, 0x94, 0xcb, 0x6e, 0xd3, 0x40,
	0x14, 0x86, 0x35, 0x4d, 0x03, 0xc9, 0x31, 0xa4, 0x30, 0xdc, 0x2c, 0x2f, 0xe2, 0x60, 0x24, 0xc8,
	0xa6, 0x8e, 0x14, 0xa4, 0x82, 0xca, 0x2a, 0x11, 0x08, 0x58, 0x51, 0xb9, 0xa4, 0x0b, 0x36, 0xd1,
	0x24, 0x9e, 0x3a, 0x96, 0x9c, 0xd8, 0x9a, 0x19, 0x07, 0xe5, 0x1d, 0x58, 0xf0, 0x58, 0x2c, 0x58,
	0xb0, 0x63, 0x17, 0x50, 0xc4, 0x65, 0x4d, 0x9e, 0x00, 0xcd, 0x78, 0x72, 0x29, 0xc2, 0x6d, 0x23,
	0x36, 0x74, 0x37, 0xe7, 0xf2, 0x7f, 0xe7, 0xf7, 0x65, 0x0e, 0x18, 0x29, 0xa7, 0x8c, 0xbb, 0x09,
	0x8b, 0x45, 0x8c, 0x6f, 0xf7, 0xc9, 0x88, 0xb0, 0xc9, 0x80, 0x92, 0x48, 0x0c, 0xdc, 0xd0, 0x4f,
	0x5c, 0x55, 0xb5, 0x76, 0x83, 0x50, 0x0c, 0xd2, 0x9e, 0xdb, 0x8f, 0x87, 0x8d, 0x20, 0x0e, 0xe2,
	0x86, 0x6a, 0xef, 0xa5, 0xc7, 0x2a, 0x52, 0x81, 0x3a, 0x65, 0x18, 0xcb, 0x0e, 0xe2, 0x38, 0x88,
	0xe8, 0xaa, 0x4b, 0x84, 0x43, 0xca, 0x05, 0x19, 0x26, 0xba, 0x61, 0x7f, 0x8d, 0x97, 0x8d, 0xdc,
	0xcd, 0x66, 0xae, 0x49, 0x26, 0x09, 0xe5, 0x0d, 0x22, 0x5e, 0x2f, 0xa4, 0xda, 0xa3, 0xd5, 0x3c,
	0xaf, 0x36, 0x4d, 0x43, 0x5f, 0x6b, 0xf6, 0xce, 0xab, 0x89, 0x42, 0x2e, 0x5e, 0x25, 0x42, 0xcf,
	0x72, 0x9e, 0x43, 0xa9, 0xc3, 0x29, 0xeb, 0x74, 0x5e, 0x3e, 0xc5, 0x4f, 0xa0, 0x2c, 0x5f, 0x46,
	0x57, 0x62, 0x4d, 0x54, 0x43, 0xf5, 0x72, 0xbb, 0x3a, 0x9b, 0xda, 0xcb, 0x86, 0xf9, 0xd4, 0xae,
	0xf8, 0xbd, 0x7d, 0x67, 0xd9, 0xe4, 0x78, 0x25, 0x79, 0xee, 0xc8, 0xe3, 0x0c, 0x41, 0xa5, 0x93,
	0x70, 0xca, 0x84, 0x6c, 0x97, 0x13, 0xfe, 0x89, 0x87, 0x1f, 0xc3, 0x15, 0x4e, 0xd9, 0x38, 0xec,
	0xd3, 0x2e, 0x8f, 0xd2, 0xc0, 0xdc, 0x52, 0xfa, 0x5b, 0xf3, 0xa9, 0x7d, 0x5d, 0x6a, 0xd6, 0x6b,
	0x8e, 0x67, 0xe8, 0xf0, 0x30, 0x4a, 0x03, 0x7c, 0x13, 0x8a, 0x74, 0x48, 0xc2, 0xc8, 0x2c, 0x48,
	0x89, 0x97, 0x05, 0xd8, 0x82, 0x52, 0x42, 0x38, 0x7f, 0x1b, 0x33, 0xdf, 0xdc, 0x56, 0x85, 0x65,
	0x8c, 0x1f, 0xc0, 0xce, 0x98, 0xb2, 0xf0, 0x78, 0xd2, 0x5d, 0xb6, 0x14, 0x55, 0x4b, 0x25, 0x4b,
	0x1f, 0xe8, 0xac, 0xf3, 0x0e, 0x41, 0xb5, 0x95, 0x8a, 0x81, 0x7c, 0x82, 0xf6, 0xe4, 0x99, 0x04,
	0xb7, 0x46, 0xfe, 0xa2, 0xac, 0x1e, 0xfa, 0x4f, 0xdf, 0x68, 0x73, 0xdf, 0x5b, 0x79, 0xbe, 0x0b,
	0x27, 0x7d, 0x3b, 0x1f, 0x11, 0xdc, 0xcd, 0xb7, 0x73, 0x40, 0x26, 0x51, 0x4c, 0xfc, 0x0b, 0xf3,
	0x19, 0x9c, 0x5f, 0x05, 0x30, 0xa4, 0xa9, 0xff, 0xd2, 0xf8, 0x21, 0x40, 0x9f, 0x51, 0x22, 0xa8,
	0xdf, 0x25, 0xc2, 0xfc, 0x76, 0xb9, 0x86, 0xea, 0x46, 0xd3, 0x72, 0xb3, 0x3d, 0xe0, 0x2e, 0x2e,
	0x99, 0xbb, 0xbc, 0xcc, 0xed, 0x3b, 0xf3, 0xa9, 0xbd, 0x23, 0x47, 0xad, 0x64, 0xce, 0xfb, 0x2f,
	0x36, 0xf2, 0xca, 0x3a, 0xd1, 0x12, 0x12, 0x9a, 0x26, 0xfe, 0x02, 0xfa, 0x7d, 0x03, 0xe8, 0x4a,
	0xa6, 0xa1, 0x3a, 0xd1, 0x12, 0xf8, 0x08, 0x0c, 0xc2, 0xfa, 0x83, 0x70, 0x9c, 0x51, 0x7f, 0x9c,
	0x4d, 0x35, 0xe7, 0x53, 0xfb, 0x9a, 0xa4, 0xae, 0xe9, 0x32, 0x2c, 0x2c, 0x32, 0x99, 0x59, 0x9f,
	0x46, 0x54, 0x9b, 0xfd, 0xb9, 0x81, 0xd9, 0x95, 0x4c, 0x9b, 0xd5, 0x89, 0x96, 0x70, 0x5e, 0xc0,
	0x55, 0xf9, 0x39, 0xb9, 0x47, 0x79, 0x12, 0x8f, 0x38, 0xc5, 0x8f, 0x60, 0xdb, 0x27, 0x82, 0x98,
	0xa8, 0x56, 0xa8, 0x1b, 0xcd, 0x7b, 0xee, 0xdf, 0xf7, 0xb5, 0xbb, 0xf6, 0x9f, 0x78, 0x4a, 0xd0,
	0xfc, 0x8c, 0xa0, 0xa8, 0x50, 0xf8, 0x08, 0x60, 0xb5, 0x89, 0xf0, 0xfd, 0x5c, 0xc4, 0x89, 0x6d,
	0x65, 0xd5, 0x4e, 0x1b, 0xa5, 0xf6, 0xe3, 0x18, 0xac, 0xfc, 0xdb, 0x86, 0xf7, 0xf2, 0xf4, 0xa7,
	0x2f, 0x8c, 0xb3, 0xe7, 0xb6, 0x6f, 0x7c, 0x98, 0x55, 0xd1, 0xa7, 0x59, 0x15, 0x7d, 0x9d, 0x55,
	0xd1, 0x9b, 0xa2, 0xaa, 0xf6, 0x2e, 0xa9, 0x17, 0xfe, 0xf0, 0x77, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x4e, 0xed, 0xdf, 0xbb, 0xde, 0x06, 0x00, 0x00,
}
