
insert into Bugs 
	(bugName, bugWorth, bugImage)
  	 values ('Beetle', 5, '/public/Assets/Images/bug01.jpg'),
	      	   ('Ant', 10, '/public/Assets/Images/bug02.jpg'),
          	   ('Doodlebug', 20, '/public/Assets/Images/bug03.jpg'),
          	   ('Firefly', 30, '/public/Assets/Images/bug01.jpg');

insert into Users 
	(UserName, bug1Count, bug2Count, bug3Count, bug4Count, wallet, bugsCaught)
        values ('Jill Jackson', 0, 0, 0, 0, 0, 0),
                  ('Wyatt Wilson', 0, 1, 0, 0, 10, 1),
                  ('Annette Anderson', 1, 1, 1, 0, 30, 3),
                  ('Mark Mitchel', 1, 0, 1, 0, 20, 2);