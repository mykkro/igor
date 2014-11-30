/**
 * string-unquote plugin
 * 
 * input: a quoted string
 * output: a string
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var _s = require('underscore.string');
	var json = '{"foo":'+input+'}';
	var output = JSON.parse(json).foo;
	callback(null, output);
}