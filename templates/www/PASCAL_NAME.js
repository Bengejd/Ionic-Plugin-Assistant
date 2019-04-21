var exec = require('cordova/exec');

var PLUGIN_NAME = "PASCAL_NAME";

var PASCAL_NAME = function() {};

PASCAL_NAME.startPlugin = function(options, onSuccess, onError) {
	options = options || {};

	exec(onSuccess, onError, PLUGIN_NAME, "startPlugin", [options]);
};

module.exports = PASCAL_NAME;
