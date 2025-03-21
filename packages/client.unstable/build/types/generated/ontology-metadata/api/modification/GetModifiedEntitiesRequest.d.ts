import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Request for calculating modified entities between two OntologyVersions.
*/
export interface GetModifiedEntitiesRequest {
	baseOntologyVersion: OntologyVersion;
	newOntologyVersion: OntologyVersion | undefined;
}
