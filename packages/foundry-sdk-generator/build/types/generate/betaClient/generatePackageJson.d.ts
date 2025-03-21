export declare function generatePackageJson(options: {
	packageName: string
	packageVersion: string
	packagePath: string
	dependencies?: Array<{
		dependencyName: string
		dependencyVersion: string
	}>
	peerDependencies?: Array<{
		dependencyName: string
		dependencyVersion: string
	}>
	beta: boolean
}): Promise<{
	name: string
	version: string
	dependencies: {
		[dependencyName: string]: string
	} | undefined
	peerDependencies: {
		[dependencyName: string]: string
	} | undefined
	type: string
}>;
