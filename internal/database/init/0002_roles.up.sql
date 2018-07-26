-- \c canary_health;

-- CREATE NOLOGIN PARENT ROLES
CREATE ROLE idp_administrator_role WITH NOLOGIN NOINHERIT;
CREATE ROLE idp_read_write_role WITH NOLOGIN NOINHERIT;
CREATE ROLE idp_read_only_role WITH NOLOGIN NOINHERIT;

-- ACCESS DB
REVOKE CONNECT ON DATABASE canary_health FROM PUBLIC;
GRANT CONNECT ON DATABASE canary_health TO idp_administrator_role;
GRANT CONNECT ON DATABASE canary_health TO idp_read_write_role;
GRANT CONNECT ON DATABASE canary_health TO idp_read_only_role;

-- ACCESS SCHEMA
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA idp TO idp_administrator_role;
GRANT USAGE ON SCHEMA idp TO idp_read_write_role;
GRANT USAGE ON SCHEMA idp TO idp_read_only_role;

-- SET ROLE DEFAULT PRIVILEGES
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA idp GRANT ALL ON TABLES TO idp_administrator_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA idp GRANT SELECT, INSERT, UPDATE ON TABLES TO idp_read_write_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA idp GRANT SELECT ON TABLES TO idp_read_only_role;

-- SET SEARCH_PATH
ALTER ROLE postgres SET search_path TO idp;
ALTER ROLE idp_administrator_role SET search_path TO idp;
ALTER ROLE idp_read_write_role SET search_path TO idp;
ALTER ROLE idp_read_only_role SET search_path TO idp;
