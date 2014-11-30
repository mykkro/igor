/**
 * echo plugin
 * 
 * input: text
 * output: the same text
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	callback(null, input);
}