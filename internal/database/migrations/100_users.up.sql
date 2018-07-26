SET search_path = idp;

CREATE TABLE users (
  user_uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  service_slug text NOT NULL,
  email citext NOT NULL CHECK (char_length(email) > 0),
  password text NOT NULL CHECK (char_length(password) > 0),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL,
  UNIQUE (service_slug, email)   
);

ALTER TABLE users OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();