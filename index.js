module.exports = (function() {

    var bodyParser = require('body-parser');

    //loading accelerated's module with your appropriate settings
    var module = new require('accelerated.api.module')({

        //set your module's key for reference by middlwares, models, and routes 
        key: 'bodyParser',

        //set your module's name for logging output 
        name: 'Body Parser Module',

        //you can choose to extend your module's middleware 
        appendMiddleware: function(express, app, models, settings) {

            app.use(bodyParser.urlencoded({ extended: false }));

            app.use(bodyParser.json({ type: 'application/json' }));

            app.use(function(req, res, next) {
                res.header('Access-Control-Allow-Origin', '*');
                next();
            });

            //modify app to include user authentication middleware 
            return app;

        }

    });

    //returning for use by accelerated.api
    return module;

})();