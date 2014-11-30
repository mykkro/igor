module.exports = function(plugin, input, options, callback) {
	var pl = require("./plugins/"+plugin+".js");
	pl(input, options, callback);
}
