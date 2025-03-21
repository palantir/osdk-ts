import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* An ObjectTypeRid with an optional ontology version
*/
export interface VersionedObjectTypeRid {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion | undefined;
}
