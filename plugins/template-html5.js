/**
 * template-html5 plugin
 * 
 * input: title
 * output: HTML5 template
 *
 * options:
 *   none
 */
module.exports = function(input, options, callback) {
	var fs = require("fs");
	fs.readFile("./plugins/templates/html5basic.html", "utf-8", callback);
}