var exec = require('cordova/exec');

var PLUGIN_NAME = "PASCAL_NAME";

var PASCAL_NAME = function() {};

PASCAL_NAME.startPlugin = function(options, onSuccess, onError) {
	options = options || {};

	// Here are the function options. It's recommended to set a default value, shown below.
  options.x = options.x || 1;
  options.y = options.y || 2;

	exec(onSuccess, onError, PLUGIN_NAME, "startPlugin", [options.x, options.y]);
};

module.exports = PASCAL_NAME;
