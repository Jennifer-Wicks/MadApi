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
  supplier_name VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  national_park VARCHAR(600),
  camp_name VARCHAR(255) NOT NULL,
  low_season_start DATE NOT NULL,
  low_season_end DATE NOT NULL,
  high_season_start DATE NOT NULL,
  high_season_end DATE NOT NULL,
  accommodation_type VARCHAR(255) NOT NULL,  
  sharing_price_ls bigint NOT NULL,  
  single_price_ls bigint NOT NULL,  
  sharing_price_hs bigint NOT NULL,  
  single_price_hs bigint NOT NULL, 
  warning_messages VARCHAR(2000) NOT NULL,  
  date DATE NOT NULL
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
    '2020-11-01',
    '2021-06-30',
    '2021-07-01',
    '2021-10-31',
    'Camping',
    '0',
    '315',
    '0',
    '315',
    'This will be a warning message i.e - Camp under repair after flooding',
    '2021-06-25'
  );

-- "supplier_name": "Namibia Wildlife Resort",
-- "area": "Fish River Canyon",
-- "national_park": "Richtersveld Transfortier Park",
-- "camp_name": "Ai-Ais",
-- "low_season_start": "2020-10-31T22:00:00.000Z",
-- "low_season_end": "2021-06-29T22:00:00.000Z",
-- "high_season_start": "2021-06-30T22:00:00.000Z",
-- "high_season_end": "2021-10-30T22:00:00.000Z",
-- "accommodation_type": "Camping",
-- "sharing_price_ls": "0",
-- "single_price_ls": "315",
-- "sharing_price_hs": "0",
-- "single_price_hs": "315",
-- "warning_messages": "This will be a warning message i.e - Camp under repair after flooding",
-- "date": "2021-06-24T22:00:00.000Z"