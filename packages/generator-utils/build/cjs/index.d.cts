declare function changeVersionPrefix(version: string, prefix: "^" | "~" | ""): string;

declare function getDependencyVersionFromFindUpPackageJson(name: string, opts?: {
    cwd: string;
}): Promise<string>;

/**
 * Resolves dependencies to their versions per our package.json if undefined.
 * Sets the prefix to `^` for the version specified or read from package.json.
 * @param deps
 * @returns
 */
declare function resolveDependenciesFromFindUp(deps: {
    [key: string]: string | undefined;
}, cwd: string): Promise<{
    dependencyName: string;
    dependencyVersion: string;
}[]>;

export { changeVersionPrefix, getDependencyVersionFromFindUpPackageJson, resolveDependenciesFromFindUp };
