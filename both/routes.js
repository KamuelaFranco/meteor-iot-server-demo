Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});
Router.route('/', function () {
	this.render('home');
});
Router.route('/connections', function () {
	this.render('incomingList');
});

Router.route('/incoming', { where: 'server' })
	.get(function () {
		Connections.insert(this.request.headers, function (error, result) {
			if (result) console.log(result);
			else console.log("Error: " + error);
		});
		this.response.end('Thanks for your patronage');
	})
	.post(function () {
		Connections.insert(this.request.headers, function (error, result) {
			if (result) console.log(result);
			else console.log("Error: " + error);
		});
		this.response.end('Thanks for your patronage');
});