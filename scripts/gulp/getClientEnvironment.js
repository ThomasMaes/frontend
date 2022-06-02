"use strict";

const fs = require("fs");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";
const dotEnvPath = path.resolve(process.cwd(), ".env");
const rootDotEnvPath = path.resolve(process.cwd(), "../..", ".env");

const dotenvFiles = [
	`${dotEnvPath}.${NODE_ENV}.local`,
	`${rootDotEnvPath}.${NODE_ENV}.local`,
	`${dotEnvPath}.${NODE_ENV}`,
	`${rootDotEnvPath}.${NODE_ENV}`,
	NODE_ENV !== "test" && `${dotEnvPath}.local`,
	NODE_ENV !== "test" && `${rootDotEnvPath}.local`,
	dotEnvPath,
	rootDotEnvPath
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
	if (fs.existsSync(dotenvFile)) {
		require("dotenv-expand")(
			require("dotenv").config({
				path: dotenvFile
			})
		);
	}
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
	.split(path.delimiter)
	.filter((folder) => folder && !path.isAbsolute(folder))
	.map((folder) => path.resolve(appDirectory, folder))
	.join(path.delimiter);

function getClientEnvironment(prefix) {
	const prefixRegex = new RegExp(`^${prefix}`, "i");
	const raw = Object.keys(process.env)
		.filter((key) => prefixRegex.test(key))
		.reduce((env, key) => {
			env[key] = process.env[key];
			return env;
		}, {});

	const stringified = {
		"process.env": Object.keys(raw).reduce((env, key) => {
			env[key] = JSON.stringify(raw[key]);
			return env;
		}, {})
	};

	return { raw, stringified };
}

module.exports = getClientEnvironment;
