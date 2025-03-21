import type { OntologyVersion } from "../OntologyVersion.js";
import type { OntologyDiff } from "./OntologyDiff.js";
/**
* Response to a GetModifiedEntitiesRequest. Contains information about which entities have been changed
* between two OntologyVersions.
*/
export interface GetModifiedEntitiesResponse {
	diff: OntologyDiff;
	baseOntologyVersion: OntologyVersion;
	newOntologyVesion: OntologyVersion;
}
