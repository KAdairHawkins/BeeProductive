
insert into Bugs 
	(BugName, BugWorth, BugRarity)
  	 values ('Beetle', 5, 1),
	      	   ('Ant', 10, 10),
          	   ('Doodlebug', 20, 20),
          	   ('Firefly', 30, 30);

insert into Users 
	(UserName, HasBug1, HasBug2, HasBug3, HasBug4)
        values ('Jill Jackson', 0, 0, 0, 0),
                  ('Wyatt Wilson', 0, 1, 0, 0),
                  ('Annette Anderson', 1, 1, 1, 0),
                  ('Mark Mitchel', 1, 0, 1, 0);seeds.sql