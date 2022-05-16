CREATE DATABASE "Peer_backend"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Chinese (Simplified)_China.936'
    LC_CTYPE = 'Chinese (Simplified)_China.936'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE IF NOT EXISTS public."User"
(
    "userID" "char"[] NOT NULL,
    color "char"[],
    url text COLLATE pg_catalog."default",
    email "char"[] NOT NULL,
    password "char"[] NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."User"
    OWNER to postgres;