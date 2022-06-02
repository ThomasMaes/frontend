import webpack from "webpack";

export interface ClientEnvironment {
	raw: { [key: string]: string };
	stringified: {
		"process.env": { [key: string]: string };
	};
}

export type AllPackageInfo = { [packageName: string]: PackageInfo };

export declare function addEnvironmentVariables(cfg: webpack.Configuration, prefix: string): webpack.Configuration;

export declare function getClientEnvironment(prefix: string): ClientEnvironment;
