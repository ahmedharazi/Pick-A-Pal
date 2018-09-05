DROP DATABASE IF EXISTS testpaldb;
CREATE DATABASE testpaldb;

-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS pickapaldb;
-- Creates the "db" database --
CREATE DATABASE pickapaldb;

-- Makes it so all of the following code will affect db --
USE pickapaldb;

-- Creates the table "people" within animals_db --
CREATE TABLE pickaplaydate (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10),
  
  pet_size VARCHAR(10),
  
  pet_temperament VARCHAR(255),
  
  owner_zipcode INTEGER(5)
);




