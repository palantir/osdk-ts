import type { Sdk, SdkPackage } from "@osdk/client.unstable.tpsa";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { Result } from "./Result.js";
type PackageInfo = Map<string, {
	sdkPackage: SdkPackage
	sdk: Sdk
	packageVersion: string
}>;
export interface OntologyInfo {
	filteredFullMetadata: OntologyFullMetadata;
	externalInterfaces: Map<string, string>;
	externalObjects: Map<string, string>;
}
export declare class OntologyMetadataResolver {
	#private;
	private stackName;
	constructor(authToken: string, stackName: string);
	private getClientContext;
	private filterMetadataByApiName;
	getInfoForPackages(pkgs: Map<string, string>): Promise<PackageInfo>;
	getWireOntologyDefinition(ontologyRid: string, entities: {
		actionTypesApiNamesToLoad?: string[]
		objectTypesApiNamesToLoad?: string[]
		queryTypesApiNamesToLoad?: string[]
		interfaceTypesApiNamesToLoad?: string[]
		linkTypesApiNamesToLoad?: string[]
	}, extPackageInfo?: PackageInfo): Promise<Result<OntologyInfo, string[]>>;
	private validateLoadedOntologyMetadata;
	private validateQueryParametersAndOutput;
	private validateActionParameters;
	private visitSupportedQueryTypes;
	private isSupportedActionTypeParameter;
	private camelize;
}
export {};
