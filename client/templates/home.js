Template.home.events({
	'click #incoming-log-button': function (event) {
		event.preventDefault();
		Router.go('/connections');
	}
});