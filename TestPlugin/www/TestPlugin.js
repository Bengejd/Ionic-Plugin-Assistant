
var exec = require('cordova/exec');
var PLUGIN_NAME = "TestPlugin";

var TestPlugin = function() {};

TestPlugin.startPlugin = function(options, onSuccess, onError) {
	options = options || {};
	exec(onSuccess, onError, PLUGIN_NAME, "startPlugin", [options]);
};

module.exports = TestPlugin;

