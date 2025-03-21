import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* An {@link ObjectTypeRid} with the {@link OntologyVersion}.
*/
export interface VersionedObjectTypeRid {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion;
}
