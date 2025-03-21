import type { OntologyVersion } from "../OntologyVersion.js";
import type { LinkTypeSecurityProvenanceInformation } from "./LinkTypeSecurityProvenanceInformation.js";
import type { Operation } from "./Operation.js";
/**
* Response with security provenance information for a LinkType made available by Object Storage services.
*/
export interface LinkTypeSecurityProvenanceLoadResponse {
	provenance: Array<LinkTypeSecurityProvenanceInformation>;
	scope: Record<string, Array<Operation>>;
	ontologyVersion: OntologyVersion;
}
