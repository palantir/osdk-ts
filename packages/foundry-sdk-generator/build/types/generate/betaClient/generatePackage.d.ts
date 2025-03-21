import type { OntologyInfo } from "../../ontologyMetadata/ontologyMetadataResolver.js";
export declare function generatePackage(ontologyInfo: OntologyInfo, options: {
	packageName: string
	packageVersion: string
	outputDir: string
	beta: boolean
	ontologyJsonOnly: boolean
}): Promise<void>;
export declare function customNormalize(pathName: string): string;
