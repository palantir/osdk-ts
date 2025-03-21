import type { ApplicationVersion } from "./ApplicationVersion.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* A request for a new SDK to be generated. At least one package manager
* type must be requested for the SDK.
*
* Application SDK settings from the requested application version will
* be used as defaults. Any settings specified within this request will
* override the defaults.
*/
export interface CreateApplicationSdkRequest {
	ontologyVersion: OntologyVersion | undefined;
	applicationVersion: ApplicationVersion;
	npm: boolean | undefined;
	pypi: boolean | undefined;
	conda: boolean | undefined;
}
