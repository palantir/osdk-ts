export interface LoadedFoundryConfig<T extends "site" | "widgetSet"> {
	foundryConfig: FoundryConfig<T>;
	configFilePath: string;
}
export type FoundryConfig<T extends "site" | "widgetSet"> = T extends "site" ? FoundrySiteConfig : T extends "widgetSet" ? FoundryWidgetSetConfig : never;
export interface FoundrySiteConfig {
	foundryUrl: string;
	site: SiteConfig;
}
export interface FoundryWidgetSetConfig {
	foundryUrl: string;
	widgetSet: WidgetSetConfig;
}
export interface SiteConfig {
	application: string;
	directory: string;
	autoVersion?: AutoVersionConfig;
	uploadOnly?: boolean;
}
export interface WidgetSetConfig {
	rid: string;
	directory: string;
	repository?: string;
	autoVersion?: AutoVersionConfig;
}
export type AutoVersionConfig = GitDescribeAutoVersionConfig | PackageJsonAutoVersionConfig;
export type AutoVersionConfigType = AutoVersionConfig["type"];
export interface GitDescribeAutoVersionConfig {
	type: "git-describe";
	tagPrefix?: string;
}
export interface PackageJsonAutoVersionConfig {
	type: "package-json";
}
/**
* Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
* @returns A promise that resolves to the configuration JSON object, or undefined if not found.
* @throws Will throw an error if the configuration file is found but cannot be read or parsed.
*/
export declare function loadFoundryConfig(type: "site"): Promise<LoadedFoundryConfig<"site"> | undefined>;
export declare function loadFoundryConfig(type: "widgetSet"): Promise<LoadedFoundryConfig<"widgetSet"> | undefined>;
