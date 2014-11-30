/**
 * json-compact plugin
 * 
 * input: text in JSON format
 * output: compacted JSON text
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var json = JSON.parse(input);
	var output = JSON.stringify(json);
	callback(null, output);
}