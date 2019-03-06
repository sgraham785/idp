-- Add tables
CREATE TABLE personal_info (
  user_uuid uuid PRIMARY KEY REFERENCES users ON DELETE CASCADE,
  first_name citext,
  last_name citext,
  gender citext,
  birthdate date,
  phone_number text,
  phone_number_code text,
  phone_number_verified boolean DEFAULT FALSE,
  street_address text,
  street_address2 text,
  city text,
  state_province text,
  zip_postal text,
  country text,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON personal_info TO idp_read_write_role;
GRANT SELECT ON personal_info TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON personal_info
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();