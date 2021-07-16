-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

CREATE TABLE users (
    "_id" serial NOT NULL,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "firstName" varchar,
    "lastName" varchar,
    "affiliation" varchar,
    "points" integer,
    CONSTRAINT "users_pk" PRIMARY KEY ("_id")
);

CREATE TABLE shoutouts (
  "_id" serial NOT NULL,
  "contents" varchar,
  "sender_id" bigint NOT NULL,
  "recipient_id" bigint NOT NULL,
  "timestamp" varchar,
  CONSTRAINT "shoutouts_pk" PRIMARY KEY ("_id")
);

CREATE TABLE stats (
  "totalShoutouts" integer,
  "lastShoutoutId" varchar,
  "lastShoutoutTimestamp" varchar
);

CREATE TABLE sessions (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  "token" varchar NOT NULL,
  CONSTRAINT "sessions_pk" PRIMARY KEY ("_id")
);

ALTER TABLE shoutouts ADD CONSTRAINT "users_fk0" FOREIGN KEY ("sender_id") REFERENCES users("_id");
ALTER TABLE shoutouts ADD CONSTRAINT "users_fk1" FOREIGN KEY ("recipient_id") REFERENCES users("_id");
ALTER TABLE sessions ADD CONSTRAINT "users_fk0" FOREIGN KEY ("user_id") REFERENCES users("_id");