Meteor.startup(function () {
	if (Connections.find({}).count() === 0) {
		console.log("No connections in the database.");
	}
});