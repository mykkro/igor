/**
 * base64-encode plugin
 * 
 * input: a string
 * output: BASE64 decoded string
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = new Buffer(input).toString("base64");
	callback(null, output);
}