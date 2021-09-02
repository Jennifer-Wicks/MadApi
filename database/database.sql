CREATE DATABASE madbookings;

/*Create tables and inset data for logon function*/

CREATE TABLE signin
(
  si_id SERIAL,
  lastname VARCHAR(255),
  email VARCHAR(255) NOT NULL PRIMARY KEY,
  date DATE NOT NULL
);

CREATE TABLE secrets
(
  se_id SERIAL,
  password VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
  date DATE NOT NULL
);

INSERT INTO signin
  (lastname, email, date)
VALUES
  ('myPassword', 'test@test1.com', '2021-01-10');

INSERT INTO secrets
  (password, email, date)
VALUES
  ('myPassword', 'test@test1.com', '2021-01-10');

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
  sharing_price_ls bigint,  
  single_price_ls bigint,  
  sharing_price_hs bigint,  
  single_price_hs bigint, 
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
