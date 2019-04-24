var exec = require('cordova/exec');
var PLUGIN_NAME = "TestShitThis";


TestShitThis.startPlugin = function(options, onSuccess, onError) {
var TestShitThis = function() {};
	options = options || {};


	exec(onSuccess, onError, PLUGIN_NAME, "startPlugin", [options]);
};

module.exports = TestShitThis;
