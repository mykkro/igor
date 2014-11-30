/**
 * uri-component-encode plugin
 * 
 * input: an URI
 * output: URI encoded 
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = encodeURIComponent(input);
	callback(null, output);
}