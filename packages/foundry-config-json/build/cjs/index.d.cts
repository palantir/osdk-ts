interface LoadedFoundryConfig<T extends "site" | "widgetSet"> {
    foundryConfig: FoundryConfig<T>;
    configFilePath: string;
}
type FoundryConfig<T extends "site" | "widgetSet"> = T extends "site" ? FoundrySiteConfig : T extends "widgetSet" ? FoundryWidgetSetConfig : never;
interface FoundrySiteConfig {
    foundryUrl: string;
    site: SiteConfig;
}
interface FoundryWidgetSetConfig {
    foundryUrl: string;
    widgetSet: WidgetSetConfig;
}
interface SiteConfig {
    application: string;
    directory: string;
    autoVersion?: AutoVersionConfig;
    uploadOnly?: boolean;
}
interface WidgetSetConfig {
    rid: string;
    directory: string;
    repository?: string;
    autoVersion?: AutoVersionConfig;
}
type AutoVersionConfig = GitDescribeAutoVersionConfig | PackageJsonAutoVersionConfig;
type AutoVersionConfigType = AutoVersionConfig["type"];
interface GitDescribeAutoVersionConfig {
    type: "git-describe";
    tagPrefix?: string;
}
interface PackageJsonAutoVersionConfig {
    type: "package-json";
}
/**
 * Asynchronously loads a configuration file. Looks for any of the CONFIG_FILE_NAMES in the current directory going up to the root directory.
 * @returns A promise that resolves to the configuration JSON object, or undefined if not found.
 * @throws Will throw an error if the configuration file is found but cannot be read or parsed.
 */
declare function loadFoundryConfig(type: "site"): Promise<LoadedFoundryConfig<"site"> | undefined>;
declare function loadFoundryConfig(type: "widgetSet"): Promise<LoadedFoundryConfig<"widgetSet"> | undefined>;

declare class AutoVersionError extends Error {
    readonly msg: string;
    readonly tip?: string | undefined;
    constructor(msg: string, tip?: string | undefined);
}
/**
 * Gets the version string using git describe. If the @param tagPrefix is empty, git describe will return the
 * latest tag (without any filtering) and if the tag starts with "v", it will be removed.
 * @param tagPrefix The prefix to use for matching against tags. Defaults to an empty string.
 * @returns A promise that resolves to the version string.
 * @throws An error if the version string is not SemVer compliant or if the version cannot be determined.
 */
declare function autoVersion(config: AutoVersionConfig): Promise<string>;

export { type AutoVersionConfig, type AutoVersionConfigType, AutoVersionError, type FoundryConfig, type GitDescribeAutoVersionConfig, type LoadedFoundryConfig, type PackageJsonAutoVersionConfig, type SiteConfig, type WidgetSetConfig, autoVersion, loadFoundryConfig };
