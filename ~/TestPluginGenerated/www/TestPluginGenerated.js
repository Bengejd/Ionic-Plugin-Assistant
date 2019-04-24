

var exec = require('cordova/exec');
var PLUGIN_NAME = "TestPluginGenerated";
TestPluginGenerated.startPlugin = function(options, onSuccess, onError) {

	options = options || {};

var TestPluginGenerated = function() {};
	exec(onSuccess, onError, PLUGIN_NAME, "startPlugin", [options]);
};

module.exports = TestPluginGenerated;
