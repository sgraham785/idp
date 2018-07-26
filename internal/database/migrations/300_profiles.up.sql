SET search_path = idp;

CREATE TABLE profiles (
  user_uuid uuid PRIMARY KEY REFERENCES users ON DELETE CASCADE,
  screen_name citext NOT NULL UNIQUE CHECK (char_length(screen_name) > 0),
  avatar text,
  description text CHECK (char_length(description) <= 255),
  timezone text,
  locale text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

ALTER TABLE profiles OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();