### SQL Schema
DROP DATABASE IF EXISTS `BeeProductive`;

CREATE DATABASE BeeProductive;
USE BeeProductive;

CREATE TABLE Users
(
	id int NOT NULL AUTO_INCREMENT,
	UserName varchar(255) NOT NULL,
   HasBug1 BOOLEAN DEFAULT false,
   HasBug2 BOOLEAN DEFAULT false,
   HasBug3 BOOLEAN DEFAULT false,
   HasBug4 BOOLEAN DEFAULT false,
	DateCreated  datetime DEFAULT NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE Bugs
(
	id int NOT NULL AUTO_INCREMENT,
	BugName varchar(255) NOT NULL,
   BugWorth int,
   BugRarity int,
	DateCreated  datetime DEFAULT NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE UserBugs
(
	id int NOT NULL AUTO_INCREMENT,
   UserID int NOT NULL,
	BugLabel varchar(255) NOT NULL,
   BugDescription varchar(255),
   TimeSpentInMinutes int,
	DateCreated  datetime DEFAULT NOW(),
	PRIMARY KEY (id)
);