module.exports = (function() {

	var moduleKey = 'bodyParser';
	var moduleName = 'Body Parser';

	/* Careful - don't modify below unless you're sure! */

	var Module = {

		key: moduleKey,

		name: moduleName,

		middleware: require('./middleware'),

		model: require('./model'),

		route: require('./route')
	
	};

	return Module;

})();
