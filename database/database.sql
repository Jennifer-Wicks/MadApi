CREATE DATABASE madbookings;

/*Create tables and inset data for logon function*/

CREATE TABLE signin
(
  si_id INTEGER PRIMARY KEY NOT NULL,
  lastname VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE secrets
(
  se_id INTEGER PRIMARY KEY NOT NULL,
  password VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  date DATE NOT NULL
);

INSERT INTO signin
  (lastname, email, date)
VALUES
  ('test', 'test@test.com', '2021-10-27');

INSERT INTO secrets
  (password, email, date)
VALUES
  ('test', 'test@test.com', '2021-10-27');

/*Create tables and inset data */

CREATE TABLE nwr_price_list
(
  price_id SERIAL PRIMARY KEY, 
  supplier_name VARCHAR(255),
  area VARCHAR(255),
  national_park VARCHAR(600),
  camp_name VARCHAR(255),
  low_season_start DATE,
  low_season_end DATE,
  high_season_start DATE,
  high_season_end DATE,
  accommodation_type VARCHAR(255),  
  sharing_price_ls VARCHAR(255),  
  single_price_ls VARCHAR(255),  
  sharing_price_hs VARCHAR(255),  
  single_price_hs VARCHAR(255), 
  warning_messages VARCHAR(2000),  
  date DATE
);

INSERT INTO nwr_price_list
  (
  supplier_name,
  area,
  national_park,
  camp_name,
  low_season_start,
  low_season_end,
  high_season_start,
  high_season_end,
  accommodation_type,  
  sharing_price_ls,  
  single_price_ls,  
  sharing_price_hs,  
  single_price_hs, 
  warning_messages,  
  date
  )
VALUES
  (
    'Namibia Wildlife Resort',
    'Fish River Canyon',
    'Richtersveld Transfortier Park',
    'Ai-Ais',
    '2020-10-01',
    '2021-5-30',
    '2021-6-01',
    '2021-10-31',
    'Camping',
    '0',
    '315',
    '0',
    '315',
    'This will be a warning message i.e - Camp under repair after flooding',
    '2021-06-25'
  );

CREATE TABLE customer_information
(
  ci_id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  surname VARCHAR(255),
  nationality VARCHAR(255),
  tel VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  adults VARCHAR(255),
  child1_5 VARCHAR(255),
  child6_12 VARCHAR(255),
  date DATE NOT NULL
);

INSERT INTO customer_information
  (name, surname, nationality, tel, email, adults, child1_5, child6_12, date)
VALUES
  ("name", "surname", "nationality", "0123654897", "email@email.com", "50", "5", "12", "2021-10-29");


CREATE TABLE customer_booking
(
  cb_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  resort1 VARCHAR(255),
  accomtype1 VARCHAR(255),
  arriveday1 DATE NOT NULL,
  departday1 DATE NOT NULL,
  resort2 VARCHAR(255),
  accomtype2 VARCHAR(255),
  arriveday2 DATE NOT NULL,
  departday2 DATE NOT NULL,
  resort3 VARCHAR(255),
  accomtype3 VARCHAR(255),
  arriveday3 DATE NOT NULL,
  departday13 DATE NOT NULL,
  comments VARCHAR(1000),
  newsletter BOOLEAN,
  date DATE NOT NULL
);

INSERT INTO customer_booking
  (email, resort1, accomtype1, arriveday1, departday1, resort2, accomtype2, arriveday2, departday2, resort3, accomtype3, arriveday3, departday13, comments, newsletter, date)
VALUES
  ("email2@email.com", 
    "resort1",
    "accomtype1",
    "2021-10-29",
    "2021-10-29",
    "resort2",
    "accomtype2",
    "2021-10-29",
    "2021-10-29",
    "resort3",
    "accomtype3",
    "2021-10-29",
    "2021-10-29",
    "comments",
    false,
    "2021-10-29"
  );


















