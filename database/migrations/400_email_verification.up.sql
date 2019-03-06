-- Add tables
CREATE TABLE email_verification (
  user_uuid uuid PRIMARY KEY REFERENCES users,
  hash uuid DEFAULT uuid_generate_v4() NOT NULL,
  verified boolean DEFAULT FALSE,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON email_verification TO idp_read_write_role;
GRANT SELECT ON email_verification TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON email_verification
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();