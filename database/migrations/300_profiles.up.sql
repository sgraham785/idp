-- Add tables 
CREATE TABLE profiles (
  user_uuid uuid PRIMARY KEY REFERENCES users ON DELETE CASCADE,
  screen_name citext NOT NULL UNIQUE CHECK (char_length(screen_name) > 3),
  avatar text,
  description text CHECK (char_length(description) <= 255),
  timezone text,
  locale text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON profiles TO idp_read_write_role;
GRANT SELECT ON profiles TO idp_read_only_role;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();