/**
 * base64-decode plugin
 * 
 * input: a string in BASE64
 * output: decoded string
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = new Buffer(input, "base64").toString("ascii");
	callback(null, output);
}