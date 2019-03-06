-- Add tables
CREATE TABLE personal_phone (
  personal_phone_uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  user_uuid uuid REFERENCES users ON DELETE CASCADE,
  phone_number text,
  phone_number_code text,
  phone_number_type text,
  phone_number_verified boolean DEFAULT FALSE,
  created_at timestamptz NOT NULL DEFAULT now(),
  archived_at timestamptz NULL,
  deleted_at timestamptz NULL
);

-- Add grants to roles
GRANT SELECT, INSERT, UPDATE ON personal_phone TO idp_read_write_role;
GRANT SELECT ON personal_phone TO idp_read_only_role;

-- Add trigger for auto timestamp update
CREATE TRIGGER set_updated_timestamp
BEFORE UPDATE ON personal_phone
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

-- Trigger to update personal_info.personal_phone
-- Check on phone_number_type for proper enum values