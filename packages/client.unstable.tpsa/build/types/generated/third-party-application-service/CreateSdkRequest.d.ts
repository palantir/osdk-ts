import type { CreateCondaSdkOptions } from "./CreateCondaSdkOptions.js";
import type { CreateMavenSdkOptions } from "./CreateMavenSdkOptions.js";
import type { CreateNpmSdkOptions } from "./CreateNpmSdkOptions.js";
import type { CreatePypiSdkOptions } from "./CreatePypiSdkOptions.js";
import type { DataScopeV2 } from "./DataScopeV2.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
/**
* A request for a new SDK to be generated. At least one package manager
* type must be requested for the SDK.
*/
export interface CreateSdkRequest {
	dataScope: DataScopeV2;
	npm: CreateNpmSdkOptions | undefined;
	pypi: CreatePypiSdkOptions | undefined;
	conda: CreateCondaSdkOptions | undefined;
	maven: CreateMavenSdkOptions | undefined;
	ontologyPackageRid: OntologyPackageRid | undefined;
}
