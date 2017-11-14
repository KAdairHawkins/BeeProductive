### SQL Schema
DROP DATABASE IF EXISTS `BeeProductive`;

CREATE DATABASE BeeProductive;
USE BeeProductive;

CREATE TABLE Users
(
	id int NOT NULL AUTO_INCREMENT,
	userName varchar(255) NOT NULL,
   	bug1Count INTEGER DEFAULT 0,
   	bug2Count INTEGER DEFAULT 0,
 	bug3Count INTEGER DEFAULT 0,
  	bug4Count INTEGER DEFAULT 0,
	profile varchar(255),
	wallet INTEGER DEFAULT 0,
	bugsCaught INTEGER,
	dateCreated  datetime DEFAULT NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE Bugs
(
	id int NOT NULL AUTO_INCREMENT,
	bugName varchar(255) NOT NULL,
        bugWorth int,
        bugImage varchar(100),
	dateCreated  datetime DEFAULT NOW(),
	PRIMARY KEY (id),
);

CREATE TABLE UserBugs
(
	id int NOT NULL AUTO_INCREMENT,
        userId int NOT NULL,
	bugLabel varchar(255) NOT NULL,
        bugDescription varchar(255),
        timeSpentInMinutes int,
	dateCreated  datetime DEFAULT NOW(),
	dateCompleted datetime
	PRIMARY KEY (id)
);