import type { ApplicationVersion } from "./ApplicationVersion.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface ApplicationSdkInputs {
	ontologyVersion: OntologyVersion;
	applicationVersion: ApplicationVersion;
}
