/**
 * json-format plugin
 * 
 * input: text in JSON format
 * output: formatted JSON text
 *
 * options:
 *   indent (default: 2)
 */
module.exports = function(input, options, callback) {
	var indent = options.indent || 2;
	var json = JSON.parse(input);
	var output = JSON.stringify(json, null, indent);
	callback(null, output);
}