SET search_path = idp;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE reset_password (
  user_uuid uuid PRIMARY KEY REFERENCES users,
  hash uuid DEFAULT uuid_generate_v4() NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

ALTER TABLE reset_password OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON reset_password
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();