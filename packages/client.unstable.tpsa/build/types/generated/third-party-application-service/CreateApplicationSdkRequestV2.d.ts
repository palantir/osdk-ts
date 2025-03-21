import type { ApplicationVersion } from "./ApplicationVersion.js";
import type { CreateCondaSdkOptions } from "./CreateCondaSdkOptions.js";
import type { CreateMavenSdkOptions } from "./CreateMavenSdkOptions.js";
import type { CreateNpmSdkOptions } from "./CreateNpmSdkOptions.js";
import type { CreatePypiSdkOptions } from "./CreatePypiSdkOptions.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* A request for a new SDK to be generated. At least one package manager
* type must be requested for the SDK.
*
* Application SDK settings from the requested application version will
* be used as defaults. Any settings specified within this request will
* override the defaults.
*/
export interface CreateApplicationSdkRequestV2 {
	ontologyVersion: OntologyVersion | undefined;
	applicationVersion: ApplicationVersion;
	npm: CreateNpmSdkOptions | undefined;
	pypi: CreatePypiSdkOptions | undefined;
	conda: CreateCondaSdkOptions | undefined;
	maven: CreateMavenSdkOptions | undefined;
}
