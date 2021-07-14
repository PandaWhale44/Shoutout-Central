SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE userList (
    userId int,
    email ,
    password <String>,
    username
    affiliation
);

ShoutoutsDisplay: 
- <Number> totalShoutouts
- <Number> lastShoutoutId
- <Date> lastShoutoutTimestamp

shoutoutList:
- <Number> shoutoutId
- <String> contents
- metadata
  - <Number> userId
  - <Number> recipientId
  - <Date> timestamp

userList:
- <Number> userId
- <String> email
- <String> password (8~64 chars, alphanumeric? ~ extendedASCII?)
- <String> username
- <String> affiliation
- <Number> totalReceivedShoutouts

CREATE TABLE public.people (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"mass" varchar,
	"hair_color" varchar,
	"skin_color" varchar,
	"eye_color" varchar,
	"birth_year" varchar,
	"gender" varchar,
	"species_id" bigint,
	"homeworld_id" bigint,
	"height" integer,
	CONSTRAINT "people_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.people ADD CONSTRAINT "people_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");

 INSERT INTO public.planets VALUES (2, 'Alderaan', 24, 364, 12500, 'temperate', '1 standard', 'grasslands, mountains', '40', 2000000000);

INSERT INTO public.films VALUES (1, 'A New Hope', 4, 'It is a period of civil war.
Rebel spaceships, striking
from a hidden base, have won
their first victory against
the evil Galactic Empire.

During the battle, Rebel
spies managed to steal secret
plans to the Empire''s
ultimate weapon, the DEATH
STAR, an armored space
station with enough power
to destroy an entire planet.

Pursued by the Empire''s
sinister agents, Princess
Leia races home aboard her
starship, custodian of the
stolen plans that can save her
people and restore
freedom to the galaxy....', 'George Lucas', 'Gary Kurtz, Rick McCallum', '1977-05-25');


select setval('public.people__id_seq', 89, false);
select setval('public.planets__id_seq', 62, false);
select setval('public.vessels__id_seq', 78, false);
select setval('public.species__id_seq', 38, false);
select setval('public.films__id_seq', 8, false);
select setval('public.people_in_films__id_seq', 174, false);
select setval('public.planets_in_films__id_seq', 35, false);
select setval('public.species_in_films__id_seq', 77, false);
select setval('public.pilots__id_seq', 45, false);
select setval('public.starship_specs__id_seq', 39, false);
