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

ALTER TABLE rel_users_roles OWNER TO idp_app_administrator;

CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON rel_users_roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();