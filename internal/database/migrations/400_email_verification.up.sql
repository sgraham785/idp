SET search_path = idp;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE email_verification (
  user_uuid uuid PRIMARY KEY REFERENCES users,
  hash uuid DEFAULT uuid_generate_v4() NOT NULL,
  verified boolean DEFAULT FALSE,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

ALTER TABLE email_verification OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON email_verification
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();