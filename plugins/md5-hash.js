/**
 * md5-hash plugin
 * 
 * input: a string
 * output: MD5 hash
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var md5 = require('MD5');
	var hash = md5(input);
	callback(null, hash);
}