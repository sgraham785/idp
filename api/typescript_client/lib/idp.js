/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.canaryhealth = (function() {

    /**
     * Namespace canaryhealth.
     * @exports canaryhealth
     * @namespace
     */
    var canaryhealth = {};

    canaryhealth.idp = (function() {

        /**
         * Namespace idp.
         * @memberof canaryhealth
         * @namespace
         */
        var idp = {};

        idp.user = (function() {

            /**
             * Namespace user.
             * @memberof canaryhealth.idp
             * @namespace
             */
            var user = {};

            user.User = (function() {

                /**
                 * Constructs a new User service.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents a User
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function User(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (User.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = User;

                /**
                 * Creates new User service using the specified rpc implementation.
                 * @function create
                 * @memberof canaryhealth.idp.user.User
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {User} RPC service. Useful where requests and/or responses are streamed.
                 */
                User.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link canaryhealth.idp.user.User#upsertUser}.
                 * @memberof canaryhealth.idp.user.User
                 * @typedef UpsertUserCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {canaryhealth.idp.user.UserUUID} [response] UserUUID
                 */

                /**
                 * Calls UpsertUser.
                 * @function upsertUser
                 * @memberof canaryhealth.idp.user.User
                 * @instance
                 * @param {canaryhealth.idp.user.IUpsertUserOpts} request UpsertUserOpts message or plain object
                 * @param {canaryhealth.idp.user.User.UpsertUserCallback} callback Node-style callback called with the error, if any, and UserUUID
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(User.prototype.upsertUser = function upsertUser(request, callback) {
                    return this.rpcCall(upsertUser, $root.canaryhealth.idp.user.UpsertUserOpts, $root.canaryhealth.idp.user.UserUUID, request, callback);
                }, "name", { value: "UpsertUser" });

                /**
                 * Calls UpsertUser.
                 * @function upsertUser
                 * @memberof canaryhealth.idp.user.User
                 * @instance
                 * @param {canaryhealth.idp.user.IUpsertUserOpts} request UpsertUserOpts message or plain object
                 * @returns {Promise<canaryhealth.idp.user.UserUUID>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link canaryhealth.idp.user.User#authenticateUser}.
                 * @memberof canaryhealth.idp.user.User
                 * @typedef AuthenticateUserCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {canaryhealth.idp.user.UserUUID} [response] UserUUID
                 */

                /**
                 * Calls AuthenticateUser.
                 * @function authenticateUser
                 * @memberof canaryhealth.idp.user.User
                 * @instance
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts} request AuthenticateUserOpts message or plain object
                 * @param {canaryhealth.idp.user.User.AuthenticateUserCallback} callback Node-style callback called with the error, if any, and UserUUID
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(User.prototype.authenticateUser = function authenticateUser(request, callback) {
                    return this.rpcCall(authenticateUser, $root.canaryhealth.idp.user.AuthenticateUserOpts, $root.canaryhealth.idp.user.UserUUID, request, callback);
                }, "name", { value: "AuthenticateUser" });

                /**
                 * Calls AuthenticateUser.
                 * @function authenticateUser
                 * @memberof canaryhealth.idp.user.User
                 * @instance
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts} request AuthenticateUserOpts message or plain object
                 * @returns {Promise<canaryhealth.idp.user.UserUUID>} Promise
                 * @variation 2
                 */

                return User;
            })();

            user.UserUUID = (function() {

                /**
                 * Properties of a UserUUID.
                 * @memberof canaryhealth.idp.user
                 * @interface IUserUUID
                 * @property {string|null} [user_uuid] UserUUID user_uuid
                 */

                /**
                 * Constructs a new UserUUID.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents a UserUUID.
                 * @implements IUserUUID
                 * @constructor
                 * @param {canaryhealth.idp.user.IUserUUID=} [properties] Properties to set
                 */
                function UserUUID(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserUUID user_uuid.
                 * @member {string} user_uuid
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @instance
                 */
                UserUUID.prototype.user_uuid = "";

                /**
                 * Creates a new UserUUID instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {canaryhealth.idp.user.IUserUUID=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.UserUUID} UserUUID instance
                 */
                UserUUID.create = function create(properties) {
                    return new UserUUID(properties);
                };

                /**
                 * Encodes the specified UserUUID message. Does not implicitly {@link canaryhealth.idp.user.UserUUID.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {canaryhealth.idp.user.IUserUUID} message UserUUID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserUUID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_uuid);
                    return writer;
                };

                /**
                 * Encodes the specified UserUUID message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserUUID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {canaryhealth.idp.user.IUserUUID} message UserUUID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserUUID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserUUID message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.UserUUID} UserUUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserUUID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.UserUUID();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user_uuid = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserUUID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.UserUUID} UserUUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserUUID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserUUID message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserUUID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        if (!$util.isString(message.user_uuid))
                            return "user_uuid: string expected";
                    return null;
                };

                /**
                 * Creates a UserUUID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.UserUUID} UserUUID
                 */
                UserUUID.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.UserUUID)
                        return object;
                    var message = new $root.canaryhealth.idp.user.UserUUID();
                    if (object.user_uuid != null)
                        message.user_uuid = String(object.user_uuid);
                    return message;
                };

                /**
                 * Creates a plain object from a UserUUID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @static
                 * @param {canaryhealth.idp.user.UserUUID} message UserUUID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserUUID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.user_uuid = "";
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        object.user_uuid = message.user_uuid;
                    return object;
                };

                /**
                 * Converts this UserUUID to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.UserUUID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserUUID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserUUID;
            })();

            user.UpsertUserOpts = (function() {

                /**
                 * Properties of an UpsertUserOpts.
                 * @memberof canaryhealth.idp.user
                 * @interface IUpsertUserOpts
                 * @property {string|null} [user_uuid] UpsertUserOpts user_uuid
                 * @property {string|null} [service_slug] UpsertUserOpts service_slug
                 * @property {string|null} [email] UpsertUserOpts email
                 * @property {string|null} [password] UpsertUserOpts password
                 * @property {string|null} [verify_password] UpsertUserOpts verify_password
                 */

                /**
                 * Constructs a new UpsertUserOpts.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents an UpsertUserOpts.
                 * @implements IUpsertUserOpts
                 * @constructor
                 * @param {canaryhealth.idp.user.IUpsertUserOpts=} [properties] Properties to set
                 */
                function UpsertUserOpts(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpsertUserOpts user_uuid.
                 * @member {string} user_uuid
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 */
                UpsertUserOpts.prototype.user_uuid = "";

                /**
                 * UpsertUserOpts service_slug.
                 * @member {string} service_slug
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 */
                UpsertUserOpts.prototype.service_slug = "";

                /**
                 * UpsertUserOpts email.
                 * @member {string} email
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 */
                UpsertUserOpts.prototype.email = "";

                /**
                 * UpsertUserOpts password.
                 * @member {string} password
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 */
                UpsertUserOpts.prototype.password = "";

                /**
                 * UpsertUserOpts verify_password.
                 * @member {string} verify_password
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 */
                UpsertUserOpts.prototype.verify_password = "";

                /**
                 * Creates a new UpsertUserOpts instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IUpsertUserOpts=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.UpsertUserOpts} UpsertUserOpts instance
                 */
                UpsertUserOpts.create = function create(properties) {
                    return new UpsertUserOpts(properties);
                };

                /**
                 * Encodes the specified UpsertUserOpts message. Does not implicitly {@link canaryhealth.idp.user.UpsertUserOpts.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IUpsertUserOpts} message UpsertUserOpts message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpsertUserOpts.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_uuid);
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.service_slug);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
                    if (message.verify_password != null && message.hasOwnProperty("verify_password"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.verify_password);
                    return writer;
                };

                /**
                 * Encodes the specified UpsertUserOpts message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UpsertUserOpts.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IUpsertUserOpts} message UpsertUserOpts message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpsertUserOpts.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpsertUserOpts message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.UpsertUserOpts} UpsertUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpsertUserOpts.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.UpsertUserOpts();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user_uuid = reader.string();
                            break;
                        case 2:
                            message.service_slug = reader.string();
                            break;
                        case 3:
                            message.email = reader.string();
                            break;
                        case 4:
                            message.password = reader.string();
                            break;
                        case 5:
                            message.verify_password = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpsertUserOpts message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.UpsertUserOpts} UpsertUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpsertUserOpts.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpsertUserOpts message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpsertUserOpts.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        if (!$util.isString(message.user_uuid))
                            return "user_uuid: string expected";
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        if (!$util.isString(message.service_slug))
                            return "service_slug: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    if (message.verify_password != null && message.hasOwnProperty("verify_password"))
                        if (!$util.isString(message.verify_password))
                            return "verify_password: string expected";
                    return null;
                };

                /**
                 * Creates an UpsertUserOpts message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.UpsertUserOpts} UpsertUserOpts
                 */
                UpsertUserOpts.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.UpsertUserOpts)
                        return object;
                    var message = new $root.canaryhealth.idp.user.UpsertUserOpts();
                    if (object.user_uuid != null)
                        message.user_uuid = String(object.user_uuid);
                    if (object.service_slug != null)
                        message.service_slug = String(object.service_slug);
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.password != null)
                        message.password = String(object.password);
                    if (object.verify_password != null)
                        message.verify_password = String(object.verify_password);
                    return message;
                };

                /**
                 * Creates a plain object from an UpsertUserOpts message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.UpsertUserOpts} message UpsertUserOpts
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpsertUserOpts.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user_uuid = "";
                        object.service_slug = "";
                        object.email = "";
                        object.password = "";
                        object.verify_password = "";
                    }
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        object.user_uuid = message.user_uuid;
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        object.service_slug = message.service_slug;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    if (message.verify_password != null && message.hasOwnProperty("verify_password"))
                        object.verify_password = message.verify_password;
                    return object;
                };

                /**
                 * Converts this UpsertUserOpts to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.UpsertUserOpts
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpsertUserOpts.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpsertUserOpts;
            })();

            user.AuthenticateUserOpts = (function() {

                /**
                 * Properties of an AuthenticateUserOpts.
                 * @memberof canaryhealth.idp.user
                 * @interface IAuthenticateUserOpts
                 * @property {string|null} [service_slug] AuthenticateUserOpts service_slug
                 * @property {string|null} [email] AuthenticateUserOpts email
                 * @property {string|null} [password] AuthenticateUserOpts password
                 */

                /**
                 * Constructs a new AuthenticateUserOpts.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents an AuthenticateUserOpts.
                 * @implements IAuthenticateUserOpts
                 * @constructor
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts=} [properties] Properties to set
                 */
                function AuthenticateUserOpts(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AuthenticateUserOpts service_slug.
                 * @member {string} service_slug
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @instance
                 */
                AuthenticateUserOpts.prototype.service_slug = "";

                /**
                 * AuthenticateUserOpts email.
                 * @member {string} email
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @instance
                 */
                AuthenticateUserOpts.prototype.email = "";

                /**
                 * AuthenticateUserOpts password.
                 * @member {string} password
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @instance
                 */
                AuthenticateUserOpts.prototype.password = "";

                /**
                 * Creates a new AuthenticateUserOpts instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.AuthenticateUserOpts} AuthenticateUserOpts instance
                 */
                AuthenticateUserOpts.create = function create(properties) {
                    return new AuthenticateUserOpts(properties);
                };

                /**
                 * Encodes the specified AuthenticateUserOpts message. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserOpts.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts} message AuthenticateUserOpts message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticateUserOpts.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.service_slug);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified AuthenticateUserOpts message, length delimited. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserOpts.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserOpts} message AuthenticateUserOpts message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticateUserOpts.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AuthenticateUserOpts message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.AuthenticateUserOpts} AuthenticateUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticateUserOpts.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.AuthenticateUserOpts();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.service_slug = reader.string();
                            break;
                        case 2:
                            message.email = reader.string();
                            break;
                        case 3:
                            message.password = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AuthenticateUserOpts message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.AuthenticateUserOpts} AuthenticateUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticateUserOpts.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AuthenticateUserOpts message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AuthenticateUserOpts.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        if (!$util.isString(message.service_slug))
                            return "service_slug: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates an AuthenticateUserOpts message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.AuthenticateUserOpts} AuthenticateUserOpts
                 */
                AuthenticateUserOpts.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.AuthenticateUserOpts)
                        return object;
                    var message = new $root.canaryhealth.idp.user.AuthenticateUserOpts();
                    if (object.service_slug != null)
                        message.service_slug = String(object.service_slug);
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from an AuthenticateUserOpts message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @static
                 * @param {canaryhealth.idp.user.AuthenticateUserOpts} message AuthenticateUserOpts
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AuthenticateUserOpts.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.service_slug = "";
                        object.email = "";
                        object.password = "";
                    }
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        object.service_slug = message.service_slug;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this AuthenticateUserOpts to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.AuthenticateUserOpts
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AuthenticateUserOpts.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AuthenticateUserOpts;
            })();

            user.AuthenticateUserPayload = (function() {

                /**
                 * Properties of an AuthenticateUserPayload.
                 * @memberof canaryhealth.idp.user
                 * @interface IAuthenticateUserPayload
                 * @property {string|null} [user_uuid] AuthenticateUserPayload user_uuid
                 * @property {string|null} [service_slug] AuthenticateUserPayload service_slug
                 * @property {string|null} [email] AuthenticateUserPayload email
                 * @property {string|null} [password] AuthenticateUserPayload password
                 */

                /**
                 * Constructs a new AuthenticateUserPayload.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents an AuthenticateUserPayload.
                 * @implements IAuthenticateUserPayload
                 * @constructor
                 * @param {canaryhealth.idp.user.IAuthenticateUserPayload=} [properties] Properties to set
                 */
                function AuthenticateUserPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AuthenticateUserPayload user_uuid.
                 * @member {string} user_uuid
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @instance
                 */
                AuthenticateUserPayload.prototype.user_uuid = "";

                /**
                 * AuthenticateUserPayload service_slug.
                 * @member {string} service_slug
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @instance
                 */
                AuthenticateUserPayload.prototype.service_slug = "";

                /**
                 * AuthenticateUserPayload email.
                 * @member {string} email
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @instance
                 */
                AuthenticateUserPayload.prototype.email = "";

                /**
                 * AuthenticateUserPayload password.
                 * @member {string} password
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @instance
                 */
                AuthenticateUserPayload.prototype.password = "";

                /**
                 * Creates a new AuthenticateUserPayload instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserPayload=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.AuthenticateUserPayload} AuthenticateUserPayload instance
                 */
                AuthenticateUserPayload.create = function create(properties) {
                    return new AuthenticateUserPayload(properties);
                };

                /**
                 * Encodes the specified AuthenticateUserPayload message. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserPayload.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserPayload} message AuthenticateUserPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticateUserPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_uuid);
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.service_slug);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified AuthenticateUserPayload message, length delimited. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IAuthenticateUserPayload} message AuthenticateUserPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticateUserPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AuthenticateUserPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.AuthenticateUserPayload} AuthenticateUserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticateUserPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.AuthenticateUserPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user_uuid = reader.string();
                            break;
                        case 2:
                            message.service_slug = reader.string();
                            break;
                        case 3:
                            message.email = reader.string();
                            break;
                        case 4:
                            message.password = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AuthenticateUserPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.AuthenticateUserPayload} AuthenticateUserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticateUserPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AuthenticateUserPayload message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AuthenticateUserPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        if (!$util.isString(message.user_uuid))
                            return "user_uuid: string expected";
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        if (!$util.isString(message.service_slug))
                            return "service_slug: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates an AuthenticateUserPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.AuthenticateUserPayload} AuthenticateUserPayload
                 */
                AuthenticateUserPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.AuthenticateUserPayload)
                        return object;
                    var message = new $root.canaryhealth.idp.user.AuthenticateUserPayload();
                    if (object.user_uuid != null)
                        message.user_uuid = String(object.user_uuid);
                    if (object.service_slug != null)
                        message.service_slug = String(object.service_slug);
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from an AuthenticateUserPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @static
                 * @param {canaryhealth.idp.user.AuthenticateUserPayload} message AuthenticateUserPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AuthenticateUserPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user_uuid = "";
                        object.service_slug = "";
                        object.email = "";
                        object.password = "";
                    }
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        object.user_uuid = message.user_uuid;
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        object.service_slug = message.service_slug;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this AuthenticateUserPayload to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.AuthenticateUserPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AuthenticateUserPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AuthenticateUserPayload;
            })();

            user.UserPayload = (function() {

                /**
                 * Properties of a UserPayload.
                 * @memberof canaryhealth.idp.user
                 * @interface IUserPayload
                 * @property {string|null} [user_uuid] UserPayload user_uuid
                 * @property {string|null} [service_slug] UserPayload service_slug
                 * @property {string|null} [email] UserPayload email
                 * @property {google.protobuf.ITimestamp|null} [created_at] UserPayload created_at
                 * @property {google.protobuf.ITimestamp|null} [updated_at] UserPayload updated_at
                 * @property {google.protobuf.ITimestamp|null} [archived_at] UserPayload archived_at
                 * @property {google.protobuf.ITimestamp|null} [deleted_at] UserPayload deleted_at
                 */

                /**
                 * Constructs a new UserPayload.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents a UserPayload.
                 * @implements IUserPayload
                 * @constructor
                 * @param {canaryhealth.idp.user.IUserPayload=} [properties] Properties to set
                 */
                function UserPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserPayload user_uuid.
                 * @member {string} user_uuid
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.user_uuid = "";

                /**
                 * UserPayload service_slug.
                 * @member {string} service_slug
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.service_slug = "";

                /**
                 * UserPayload email.
                 * @member {string} email
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.email = "";

                /**
                 * UserPayload created_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} created_at
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.created_at = null;

                /**
                 * UserPayload updated_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} updated_at
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.updated_at = null;

                /**
                 * UserPayload archived_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} archived_at
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.archived_at = null;

                /**
                 * UserPayload deleted_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} deleted_at
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 */
                UserPayload.prototype.deleted_at = null;

                /**
                 * Creates a new UserPayload instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IUserPayload=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.UserPayload} UserPayload instance
                 */
                UserPayload.create = function create(properties) {
                    return new UserPayload(properties);
                };

                /**
                 * Encodes the specified UserPayload message. Does not implicitly {@link canaryhealth.idp.user.UserPayload.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IUserPayload} message UserPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_uuid);
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.service_slug);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 996, wireType 2 =*/7970).fork()).ldelim();
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 997, wireType 2 =*/7978).fork()).ldelim();
                    if (message.archived_at != null && message.hasOwnProperty("archived_at"))
                        $root.google.protobuf.Timestamp.encode(message.archived_at, writer.uint32(/* id 998, wireType 2 =*/7986).fork()).ldelim();
                    if (message.deleted_at != null && message.hasOwnProperty("deleted_at"))
                        $root.google.protobuf.Timestamp.encode(message.deleted_at, writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UserPayload message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {canaryhealth.idp.user.IUserPayload} message UserPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.UserPayload} UserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserPayload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.UserPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user_uuid = reader.string();
                            break;
                        case 2:
                            message.service_slug = reader.string();
                            break;
                        case 3:
                            message.email = reader.string();
                            break;
                        case 996:
                            message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 997:
                            message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 998:
                            message.archived_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 999:
                            message.deleted_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.UserPayload} UserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserPayload message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        if (!$util.isString(message.user_uuid))
                            return "user_uuid: string expected";
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        if (!$util.isString(message.service_slug))
                            return "service_slug: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.created_at != null && message.hasOwnProperty("created_at")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.created_at);
                        if (error)
                            return "created_at." + error;
                    }
                    if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                        if (error)
                            return "updated_at." + error;
                    }
                    if (message.archived_at != null && message.hasOwnProperty("archived_at")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.archived_at);
                        if (error)
                            return "archived_at." + error;
                    }
                    if (message.deleted_at != null && message.hasOwnProperty("deleted_at")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.deleted_at);
                        if (error)
                            return "deleted_at." + error;
                    }
                    return null;
                };

                /**
                 * Creates a UserPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.UserPayload} UserPayload
                 */
                UserPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.UserPayload)
                        return object;
                    var message = new $root.canaryhealth.idp.user.UserPayload();
                    if (object.user_uuid != null)
                        message.user_uuid = String(object.user_uuid);
                    if (object.service_slug != null)
                        message.service_slug = String(object.service_slug);
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.created_at != null) {
                        if (typeof object.created_at !== "object")
                            throw TypeError(".canaryhealth.idp.user.UserPayload.created_at: object expected");
                        message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
                    }
                    if (object.updated_at != null) {
                        if (typeof object.updated_at !== "object")
                            throw TypeError(".canaryhealth.idp.user.UserPayload.updated_at: object expected");
                        message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
                    }
                    if (object.archived_at != null) {
                        if (typeof object.archived_at !== "object")
                            throw TypeError(".canaryhealth.idp.user.UserPayload.archived_at: object expected");
                        message.archived_at = $root.google.protobuf.Timestamp.fromObject(object.archived_at);
                    }
                    if (object.deleted_at != null) {
                        if (typeof object.deleted_at !== "object")
                            throw TypeError(".canaryhealth.idp.user.UserPayload.deleted_at: object expected");
                        message.deleted_at = $root.google.protobuf.Timestamp.fromObject(object.deleted_at);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @static
                 * @param {canaryhealth.idp.user.UserPayload} message UserPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user_uuid = "";
                        object.service_slug = "";
                        object.email = "";
                        object.created_at = null;
                        object.updated_at = null;
                        object.archived_at = null;
                        object.deleted_at = null;
                    }
                    if (message.user_uuid != null && message.hasOwnProperty("user_uuid"))
                        object.user_uuid = message.user_uuid;
                    if (message.service_slug != null && message.hasOwnProperty("service_slug"))
                        object.service_slug = message.service_slug;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
                    if (message.archived_at != null && message.hasOwnProperty("archived_at"))
                        object.archived_at = $root.google.protobuf.Timestamp.toObject(message.archived_at, options);
                    if (message.deleted_at != null && message.hasOwnProperty("deleted_at"))
                        object.deleted_at = $root.google.protobuf.Timestamp.toObject(message.deleted_at, options);
                    return object;
                };

                /**
                 * Converts this UserPayload to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.UserPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserPayload;
            })();

            user.UserResponse = (function() {

                /**
                 * Properties of a UserResponse.
                 * @memberof canaryhealth.idp.user
                 * @interface IUserResponse
                 * @property {Array.<canaryhealth.idp.user.IUserPayload>|null} [data] UserResponse data
                 */

                /**
                 * Constructs a new UserResponse.
                 * @memberof canaryhealth.idp.user
                 * @classdesc Represents a UserResponse.
                 * @implements IUserResponse
                 * @constructor
                 * @param {canaryhealth.idp.user.IUserResponse=} [properties] Properties to set
                 */
                function UserResponse(properties) {
                    this.data = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserResponse data.
                 * @member {Array.<canaryhealth.idp.user.IUserPayload>} data
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @instance
                 */
                UserResponse.prototype.data = $util.emptyArray;

                /**
                 * Creates a new UserResponse instance using the specified properties.
                 * @function create
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {canaryhealth.idp.user.IUserResponse=} [properties] Properties to set
                 * @returns {canaryhealth.idp.user.UserResponse} UserResponse instance
                 */
                UserResponse.create = function create(properties) {
                    return new UserResponse(properties);
                };

                /**
                 * Encodes the specified UserResponse message. Does not implicitly {@link canaryhealth.idp.user.UserResponse.verify|verify} messages.
                 * @function encode
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {canaryhealth.idp.user.IUserResponse} message UserResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.data != null && message.data.length)
                        for (var i = 0; i < message.data.length; ++i)
                            $root.canaryhealth.idp.user.UserPayload.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {canaryhealth.idp.user.IUserResponse} message UserResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {canaryhealth.idp.user.UserResponse} UserResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.canaryhealth.idp.user.UserResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.data && message.data.length))
                                message.data = [];
                            message.data.push($root.canaryhealth.idp.user.UserPayload.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {canaryhealth.idp.user.UserResponse} UserResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserResponse message.
                 * @function verify
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.data != null && message.hasOwnProperty("data")) {
                        if (!Array.isArray(message.data))
                            return "data: array expected";
                        for (var i = 0; i < message.data.length; ++i) {
                            var error = $root.canaryhealth.idp.user.UserPayload.verify(message.data[i]);
                            if (error)
                                return "data." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {canaryhealth.idp.user.UserResponse} UserResponse
                 */
                UserResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.canaryhealth.idp.user.UserResponse)
                        return object;
                    var message = new $root.canaryhealth.idp.user.UserResponse();
                    if (object.data) {
                        if (!Array.isArray(object.data))
                            throw TypeError(".canaryhealth.idp.user.UserResponse.data: array expected");
                        message.data = [];
                        for (var i = 0; i < object.data.length; ++i) {
                            if (typeof object.data[i] !== "object")
                                throw TypeError(".canaryhealth.idp.user.UserResponse.data: object expected");
                            message.data[i] = $root.canaryhealth.idp.user.UserPayload.fromObject(object.data[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @static
                 * @param {canaryhealth.idp.user.UserResponse} message UserResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.data = [];
                    if (message.data && message.data.length) {
                        object.data = [];
                        for (var j = 0; j < message.data.length; ++j)
                            object.data[j] = $root.canaryhealth.idp.user.UserPayload.toObject(message.data[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UserResponse to JSON.
                 * @function toJSON
                 * @memberof canaryhealth.idp.user.UserResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserResponse;
            })();

            return user;
        })();

        return idp;
    })();

    return canaryhealth;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
