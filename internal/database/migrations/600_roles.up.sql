SET search_path = idp;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roles (
  role_uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  title citext NOT NULL UNIQUE,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

ALTER TABLE roles OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();