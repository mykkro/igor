/**
 * uri-encode plugin
 * 
 * input: an URI
 * output: URI encoded 
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = encodeURI(input);
	callback(null, output);
}