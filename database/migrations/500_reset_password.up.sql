-- Add tables
CREATE TABLE reset_password (
  user_uuid uuid PRIMARY KEY REFERENCES users,
  hash uuid DEFAULT uuid_generate_v4() NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON reset_password TO idp_read_write_role;
GRANT SELECT ON reset_password TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON reset_password
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();