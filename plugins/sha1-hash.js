/**
 * md5-hash plugin
 * 
 * input: a string
 * output: SHA1 hash
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var sha1 = require('sha1');
	var hash = sha1(input);
	callback(null, hash);
}