module.exports = function() {

    // you can require this or other modules using accelerated.api.module 
    var module = new require('accelerated.api.module')();

	var bodyParser = require('body-parser');

    // set your module's key for reference by middlwares, models, and routes 
    module.setKey('bodyParser');

    // set your module's name for logging output 
    module.setName('Body Parser Module');

    // you can choose to extend your module's middleware 
    module.appendMiddleware(function(express, app, models) {

		app.use(bodyParser.urlencoded({ extended: false }));

		app.use(bodyParser.json({ type: 'application/json' }));

		app.use(function(req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			next();
		});

        // modify app to include user authentication middleware 
        return app;

    });

    return module;

};