CREATE DATABASE beeProductive;
USE DATABASE beeProductive;
CREATE TABLE users (
id INT AUTO_INCREMENT NOT NULL,
userName VARCHAR(255),
hasBug1 BOOLEAN,
numberBug1 INT (5),
hasBug2 BOOLEAN,
numberBug2 INT (5),
hasBug3 BOOLEAN,
numberBug3 INT (5),
hasBug4 BOOLEAN,
numberBug4 INT (5),
createdAt TIMESTAMP NOT NULL
)