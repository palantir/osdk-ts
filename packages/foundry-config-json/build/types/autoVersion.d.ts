import type { AutoVersionConfig } from "./config.js";
export declare class AutoVersionError extends Error {
	readonly msg: string;
	readonly tip?: string;
	constructor(msg: string, tip?: string);
}
/**
* Gets the version string using git describe. If the @param tagPrefix is empty, git describe will return the
* latest tag (without any filtering) and if the tag starts with "v", it will be removed.
* @param tagPrefix The prefix to use for matching against tags. Defaults to an empty string.
* @returns A promise that resolves to the version string.
* @throws An error if the version string is not SemVer compliant or if the version cannot be determined.
*/
export declare function autoVersion(config: AutoVersionConfig): Promise<string>;
