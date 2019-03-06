-- Add tables
CREATE TABLE roles (
  role_uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  title citext NOT NULL UNIQUE,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON roles TO idp_read_write_role;
GRANT SELECT ON roles TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON roles
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();
