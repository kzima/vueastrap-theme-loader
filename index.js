// themes loader makes theme variables available to each module during compilation process
// its relative to the module/components sufolder of the vue-component folder
// configuration within webpack.config.js stating theme locations is required for this to work
module.exports = function(source) {
	this.cacheable();
	var config = this.options.themeLoader || false;
	if (config && config.themes.length > 0) {
		var result = "";
		config.themes.forEach(function(theme){
			result += "@import '" + theme + "';\n";
		});
		return result += source;
	}
	return source;
};