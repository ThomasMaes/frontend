const getClientEnvironment = require("./getClientEnvironment");
const webpack = require("webpack");

const addEnvironmentVariables = (cfg, prefix) => {
	let pluginDefine = null;
	for (var i = 0; i < cfg.plugins.length; i++) {
		var plugin = cfg.plugins[i];
		if (plugin instanceof webpack.DefinePlugin) {
			pluginDefine = plugin;
		}
	}

	const currentEnv = getClientEnvironment(prefix).stringified;

	if (pluginDefine) {
		pluginDefine.definitions = { ...pluginDefine.definitions, ...currentEnv };
	} else {
		cfg.plugins.push(new webpack.DefinePlugin(currentEnv));
	}

	return cfg;
};

module.exports = addEnvironmentVariables;
