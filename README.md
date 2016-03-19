
## Usage
This is just out-of-the-box, standard-issue middleware for your ```accelerated.api``` project.

Once you include ```accelerated.api.bodyParser``` into your project dependencies and ```npm install accelerated.api.body-parser --save``` your project (thereby installing this module), you'll want to include the module like this:

```

var api = require('accelerated.api');

var apiBodyParser = require('acceleratd.api.body-parser').use();

api.useMiddlewares([ 
	[apiBodyParser.key, apiBodyParser.middleware]
]);

api.run();

```
