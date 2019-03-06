--Add tables
CREATE TABLE personal_address (
  personal_address_uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  user_uuid uuid REFERENCES users ON DELETE CASCADE,
  street_address text,
  street_address2 text,
  city text,
  state_province text,
  zip_postal text,
  country text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON personal_address TO idp_read_write_role;
GRANT SELECT ON personal_address TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON personal_address
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();