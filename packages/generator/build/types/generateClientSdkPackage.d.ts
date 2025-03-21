import type { MinimalFs } from "./MinimalFs.js";
import type { WireOntologyDefinition } from "./WireOntologyDefinition.js";
export declare function generateClientSdkPackage(packageName: string, packageVersion: string, sdkVersion: "1.1" | "2.0", baseOutDir: string, ontology: WireOntologyDefinition, minimalFs: MinimalFs, dependencyVersions: DependencyVersions, cliVersion: string, externalObjects?: Map<string, string>, externalInterfaces?: Map<string, string>): Promise<void>;
export interface DependencyVersions {
	typescriptVersion: string;
	tslibVersion: string;
	areTheTypesWrongVersion: string;
	osdkApiVersion: string;
	osdkClientVersion: string;
}
export declare function getExpectedDependencies({ osdkApiVersion, osdkClientVersion }: DependencyVersions): {
	devDependencies: Record<string, string>
	peerDependencies: Record<string, string>
};
export declare function getPackageJsonContents(name: string, version: string, dependencyVersions: DependencyVersions): {
	files: string[]
	devDependencies: Record<string, string>
	peerDependencies: Record<string, string>
	name: string
	version: string
	main: string
	module: string
	exports: {
		".": {
			import: string
			require: string
		}
	}
	scripts: {
		prepack: string
		check: string
	}
};
