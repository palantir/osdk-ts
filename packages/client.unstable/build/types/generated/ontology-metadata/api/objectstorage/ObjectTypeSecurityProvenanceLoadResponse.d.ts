import type { OntologyVersion } from "../OntologyVersion.js";
import type { ObjectTypeSecurityProvenanceInformation } from "./ObjectTypeSecurityProvenanceInformation.js";
import type { Operation } from "./Operation.js";
/**
* Response with security provenance information for an ObjectType made available by Object Storage services.
*/
export interface ObjectTypeSecurityProvenanceLoadResponse {
	provenance: Array<ObjectTypeSecurityProvenanceInformation>;
	scope: Record<string, Array<Operation>>;
	ontologyVersion: OntologyVersion;
}
