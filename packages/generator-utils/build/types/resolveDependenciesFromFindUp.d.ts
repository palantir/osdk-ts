/**
* Resolves dependencies to their versions per our package.json if undefined.
* Sets the prefix to `^` for the version specified or read from package.json.
* @param deps
* @returns
*/
export declare function resolveDependenciesFromFindUp(deps: {
	[key: string]: string | undefined
}, cwd: string): Promise<{
	dependencyName: string
	dependencyVersion: string
}[]>;
