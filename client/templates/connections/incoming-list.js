Template.incomingList.helpers({
	connections: function () {
		return Connections;
	},
	settings: function () {
		return {
			collection: Connections,
			fields: ['connection', 'host', 'user-agent']
		};
	}
});