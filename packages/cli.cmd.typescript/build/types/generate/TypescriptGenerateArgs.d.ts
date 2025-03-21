export interface TypescriptGenerateArgs {
	outDir: string;
	ontologyPath?: string;
	ontologyWritePath?: string;
	foundryUrl?: string;
	clientId?: string;
	beta?: boolean;
	packageType: "commonjs" | "module";
	version: string;
	ontologyRid?: string;
	asPackage?: boolean;
	packageName?: string;
	clean?: boolean;
	internal: boolean;
	externalObjects: Map<string, string>;
	externalInterfaces: Map<string, string>;
}
