/**
 * uri-encode plugin
 * 
 * input: URI encoded string
 * output: URI decoded
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = decodeURI(input);
	callback(null, output);
}