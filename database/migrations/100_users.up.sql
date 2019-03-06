CREATE TABLE users (
  user_uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  service_slug text NOT NULL,
  email citext NOT NULL CHECK (char_length(email) > 0),
  password text NOT NULL CHECK (char_length(password) > 5),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL,
  UNIQUE (service_slug, email)   
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON users TO idp_read_write_role;
GRANT SELECT ON users TO idp_read_only_role;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

-- Add indexes


-- Add alters
ALTER TABLE users
ADD CONSTRAINT users_service_slug_lowercase_ck
CHECK (service_slug = lower(service_slug));
