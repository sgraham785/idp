import * as $protobuf from "protobufjs";
/** Namespace canaryhealth. */
export namespace canaryhealth {

    /** Namespace idp. */
    namespace idp {

        /** Namespace user. */
        namespace user {

            /** Represents a User */
            class User extends $protobuf.rpc.Service {

                /**
                 * Constructs a new User service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new User service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): User;

                /**
                 * Calls UpsertUser.
                 * @param request UpsertUserOpts message or plain object
                 * @param callback Node-style callback called with the error, if any, and UserUUID
                 */
                public upsertUser(request: canaryhealth.idp.user.IUpsertUserOpts, callback: canaryhealth.idp.user.User.UpsertUserCallback): void;

                /**
                 * Calls UpsertUser.
                 * @param request UpsertUserOpts message or plain object
                 * @returns Promise
                 */
                public upsertUser(request: canaryhealth.idp.user.IUpsertUserOpts): Promise<canaryhealth.idp.user.UserUUID>;

                /**
                 * Calls AuthenticateUser.
                 * @param request AuthenticateUserOpts message or plain object
                 * @param callback Node-style callback called with the error, if any, and UserUUID
                 */
                public authenticateUser(request: canaryhealth.idp.user.IAuthenticateUserOpts, callback: canaryhealth.idp.user.User.AuthenticateUserCallback): void;

                /**
                 * Calls AuthenticateUser.
                 * @param request AuthenticateUserOpts message or plain object
                 * @returns Promise
                 */
                public authenticateUser(request: canaryhealth.idp.user.IAuthenticateUserOpts): Promise<canaryhealth.idp.user.UserUUID>;
            }

            namespace User {

                /**
                 * Callback as used by {@link canaryhealth.idp.user.User#upsertUser}.
                 * @param error Error, if any
                 * @param [response] UserUUID
                 */
                type UpsertUserCallback = (error: (Error|null), response?: canaryhealth.idp.user.UserUUID) => void;

                /**
                 * Callback as used by {@link canaryhealth.idp.user.User#authenticateUser}.
                 * @param error Error, if any
                 * @param [response] UserUUID
                 */
                type AuthenticateUserCallback = (error: (Error|null), response?: canaryhealth.idp.user.UserUUID) => void;
            }

            /** Properties of a UserUUID. */
            interface IUserUUID {

                /** UserUUID user_uuid */
                user_uuid?: (string|null);
            }

            /** Represents a UserUUID. */
            class UserUUID implements IUserUUID {

                /**
                 * Constructs a new UserUUID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IUserUUID);

                /** UserUUID user_uuid. */
                public user_uuid: string;

                /**
                 * Creates a new UserUUID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserUUID instance
                 */
                public static create(properties?: canaryhealth.idp.user.IUserUUID): canaryhealth.idp.user.UserUUID;

                /**
                 * Encodes the specified UserUUID message. Does not implicitly {@link canaryhealth.idp.user.UserUUID.verify|verify} messages.
                 * @param message UserUUID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IUserUUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserUUID message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserUUID.verify|verify} messages.
                 * @param message UserUUID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IUserUUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserUUID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserUUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.UserUUID;

                /**
                 * Decodes a UserUUID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserUUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.UserUUID;

                /**
                 * Verifies a UserUUID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserUUID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserUUID
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.UserUUID;

                /**
                 * Creates a plain object from a UserUUID message. Also converts values to other types if specified.
                 * @param message UserUUID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.UserUUID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserUUID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpsertUserOpts. */
            interface IUpsertUserOpts {

                /** UpsertUserOpts user_uuid */
                user_uuid?: (string|null);

                /** UpsertUserOpts service_slug */
                service_slug?: (string|null);

                /** UpsertUserOpts email */
                email?: (string|null);

                /** UpsertUserOpts password */
                password?: (string|null);

                /** UpsertUserOpts verify_password */
                verify_password?: (string|null);
            }

            /** Represents an UpsertUserOpts. */
            class UpsertUserOpts implements IUpsertUserOpts {

                /**
                 * Constructs a new UpsertUserOpts.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IUpsertUserOpts);

                /** UpsertUserOpts user_uuid. */
                public user_uuid: string;

                /** UpsertUserOpts service_slug. */
                public service_slug: string;

                /** UpsertUserOpts email. */
                public email: string;

                /** UpsertUserOpts password. */
                public password: string;

                /** UpsertUserOpts verify_password. */
                public verify_password: string;

                /**
                 * Creates a new UpsertUserOpts instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpsertUserOpts instance
                 */
                public static create(properties?: canaryhealth.idp.user.IUpsertUserOpts): canaryhealth.idp.user.UpsertUserOpts;

                /**
                 * Encodes the specified UpsertUserOpts message. Does not implicitly {@link canaryhealth.idp.user.UpsertUserOpts.verify|verify} messages.
                 * @param message UpsertUserOpts message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IUpsertUserOpts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpsertUserOpts message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UpsertUserOpts.verify|verify} messages.
                 * @param message UpsertUserOpts message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IUpsertUserOpts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpsertUserOpts message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpsertUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.UpsertUserOpts;

                /**
                 * Decodes an UpsertUserOpts message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpsertUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.UpsertUserOpts;

                /**
                 * Verifies an UpsertUserOpts message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpsertUserOpts message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpsertUserOpts
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.UpsertUserOpts;

                /**
                 * Creates a plain object from an UpsertUserOpts message. Also converts values to other types if specified.
                 * @param message UpsertUserOpts
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.UpsertUserOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpsertUserOpts to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthenticateUserOpts. */
            interface IAuthenticateUserOpts {

                /** AuthenticateUserOpts service_slug */
                service_slug?: (string|null);

                /** AuthenticateUserOpts email */
                email?: (string|null);

                /** AuthenticateUserOpts password */
                password?: (string|null);
            }

            /** Represents an AuthenticateUserOpts. */
            class AuthenticateUserOpts implements IAuthenticateUserOpts {

                /**
                 * Constructs a new AuthenticateUserOpts.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IAuthenticateUserOpts);

                /** AuthenticateUserOpts service_slug. */
                public service_slug: string;

                /** AuthenticateUserOpts email. */
                public email: string;

                /** AuthenticateUserOpts password. */
                public password: string;

                /**
                 * Creates a new AuthenticateUserOpts instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthenticateUserOpts instance
                 */
                public static create(properties?: canaryhealth.idp.user.IAuthenticateUserOpts): canaryhealth.idp.user.AuthenticateUserOpts;

                /**
                 * Encodes the specified AuthenticateUserOpts message. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserOpts.verify|verify} messages.
                 * @param message AuthenticateUserOpts message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IAuthenticateUserOpts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthenticateUserOpts message, length delimited. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserOpts.verify|verify} messages.
                 * @param message AuthenticateUserOpts message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IAuthenticateUserOpts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthenticateUserOpts message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthenticateUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.AuthenticateUserOpts;

                /**
                 * Decodes an AuthenticateUserOpts message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthenticateUserOpts
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.AuthenticateUserOpts;

                /**
                 * Verifies an AuthenticateUserOpts message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthenticateUserOpts message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthenticateUserOpts
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.AuthenticateUserOpts;

                /**
                 * Creates a plain object from an AuthenticateUserOpts message. Also converts values to other types if specified.
                 * @param message AuthenticateUserOpts
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.AuthenticateUserOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthenticateUserOpts to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthenticateUserPayload. */
            interface IAuthenticateUserPayload {

                /** AuthenticateUserPayload user_uuid */
                user_uuid?: (string|null);

                /** AuthenticateUserPayload service_slug */
                service_slug?: (string|null);

                /** AuthenticateUserPayload email */
                email?: (string|null);

                /** AuthenticateUserPayload password */
                password?: (string|null);
            }

            /** Represents an AuthenticateUserPayload. */
            class AuthenticateUserPayload implements IAuthenticateUserPayload {

                /**
                 * Constructs a new AuthenticateUserPayload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IAuthenticateUserPayload);

                /** AuthenticateUserPayload user_uuid. */
                public user_uuid: string;

                /** AuthenticateUserPayload service_slug. */
                public service_slug: string;

                /** AuthenticateUserPayload email. */
                public email: string;

                /** AuthenticateUserPayload password. */
                public password: string;

                /**
                 * Creates a new AuthenticateUserPayload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthenticateUserPayload instance
                 */
                public static create(properties?: canaryhealth.idp.user.IAuthenticateUserPayload): canaryhealth.idp.user.AuthenticateUserPayload;

                /**
                 * Encodes the specified AuthenticateUserPayload message. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserPayload.verify|verify} messages.
                 * @param message AuthenticateUserPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IAuthenticateUserPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthenticateUserPayload message, length delimited. Does not implicitly {@link canaryhealth.idp.user.AuthenticateUserPayload.verify|verify} messages.
                 * @param message AuthenticateUserPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IAuthenticateUserPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthenticateUserPayload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthenticateUserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.AuthenticateUserPayload;

                /**
                 * Decodes an AuthenticateUserPayload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthenticateUserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.AuthenticateUserPayload;

                /**
                 * Verifies an AuthenticateUserPayload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthenticateUserPayload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthenticateUserPayload
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.AuthenticateUserPayload;

                /**
                 * Creates a plain object from an AuthenticateUserPayload message. Also converts values to other types if specified.
                 * @param message AuthenticateUserPayload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.AuthenticateUserPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthenticateUserPayload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UserPayload. */
            interface IUserPayload {

                /** UserPayload user_uuid */
                user_uuid?: (string|null);

                /** UserPayload service_slug */
                service_slug?: (string|null);

                /** UserPayload email */
                email?: (string|null);

                /** UserPayload created_at */
                created_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload updated_at */
                updated_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload archived_at */
                archived_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload deleted_at */
                deleted_at?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a UserPayload. */
            class UserPayload implements IUserPayload {

                /**
                 * Constructs a new UserPayload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IUserPayload);

                /** UserPayload user_uuid. */
                public user_uuid: string;

                /** UserPayload service_slug. */
                public service_slug: string;

                /** UserPayload email. */
                public email: string;

                /** UserPayload created_at. */
                public created_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload updated_at. */
                public updated_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload archived_at. */
                public archived_at?: (google.protobuf.ITimestamp|null);

                /** UserPayload deleted_at. */
                public deleted_at?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new UserPayload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserPayload instance
                 */
                public static create(properties?: canaryhealth.idp.user.IUserPayload): canaryhealth.idp.user.UserPayload;

                /**
                 * Encodes the specified UserPayload message. Does not implicitly {@link canaryhealth.idp.user.UserPayload.verify|verify} messages.
                 * @param message UserPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IUserPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserPayload message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserPayload.verify|verify} messages.
                 * @param message UserPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IUserPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserPayload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.UserPayload;

                /**
                 * Decodes a UserPayload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.UserPayload;

                /**
                 * Verifies a UserPayload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserPayload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserPayload
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.UserPayload;

                /**
                 * Creates a plain object from a UserPayload message. Also converts values to other types if specified.
                 * @param message UserPayload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.UserPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserPayload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UserResponse. */
            interface IUserResponse {

                /** UserResponse data */
                data?: (canaryhealth.idp.user.IUserPayload[]|null);
            }

            /** Represents a UserResponse. */
            class UserResponse implements IUserResponse {

                /**
                 * Constructs a new UserResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: canaryhealth.idp.user.IUserResponse);

                /** UserResponse data. */
                public data: canaryhealth.idp.user.IUserPayload[];

                /**
                 * Creates a new UserResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserResponse instance
                 */
                public static create(properties?: canaryhealth.idp.user.IUserResponse): canaryhealth.idp.user.UserResponse;

                /**
                 * Encodes the specified UserResponse message. Does not implicitly {@link canaryhealth.idp.user.UserResponse.verify|verify} messages.
                 * @param message UserResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: canaryhealth.idp.user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link canaryhealth.idp.user.UserResponse.verify|verify} messages.
                 * @param message UserResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: canaryhealth.idp.user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): canaryhealth.idp.user.UserResponse;

                /**
                 * Decodes a UserResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): canaryhealth.idp.user.UserResponse;

                /**
                 * Verifies a UserResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserResponse
                 */
                public static fromObject(object: { [k: string]: any }): canaryhealth.idp.user.UserResponse;

                /**
                 * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
                 * @param message UserResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: canaryhealth.idp.user.UserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
