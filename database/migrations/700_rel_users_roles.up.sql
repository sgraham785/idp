SET search_path = idp;

CREATE TABLE rel_users_roles (
  user_uuid uuid NOT NULL REFERENCES users,
  role_uuid uuid NOT NULL REFERENCES roles,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL,
  PRIMARY KEY (user_uuid, role_uuid)
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON rel_users_roles TO idp_read_write_role;
GRANT SELECT ON rel_users_roles TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON rel_users_roles
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

-- Trigger to set the role to participant