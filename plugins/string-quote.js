/**
 * string-quote plugin
 * 
 * input: a string
 * output: a quoted string
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var output = JSON.stringify(input);
	callback(null, output);
}