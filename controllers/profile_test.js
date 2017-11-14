
// Import the burger model to gain access to the database functions
var bug = require('./profile.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require('../config/connection.js');

// Select all entries from the database
profile.selectAll(function (data) {
	console.log('profile.selectAll test...\n\n');

	console.log('__________profile__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('User ID = ' + data[i].UserID);
		console.log('BugLabel = ' + data[i].BugLabel);
		console.log('BugDescription = ' + data[i].BugDescription);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});


connection.end();
export.modules = bug;