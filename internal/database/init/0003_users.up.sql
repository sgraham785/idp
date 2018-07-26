-- CREATE LOGIN USERS
CREATE USER idp_app_administrator LOGIN INHERIT IN ROLE idp_administrator_role ENCRYPTED PASSWORD 'postgres';
CREATE USER idp_app_user LOGIN INHERIT IN ROLE idp_read_write_role ENCRYPTED PASSWORD 'postgres';
CREATE USER idp_read_only_user LOGIN INHERIT IN ROLE idp_read_only_role ENCRYPTED PASSWORD 'postgres';