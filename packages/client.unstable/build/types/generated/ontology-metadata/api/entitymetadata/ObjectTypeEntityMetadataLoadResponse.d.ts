import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { ObjectTypeEntityMetadata } from "./ObjectTypeEntityMetadata.js";
import type { ObjectTypeSystemEntityMetadata } from "./ObjectTypeSystemEntityMetadata.js";
/**
* Response to ObjectTypeEntityMetadataLoadRequest.
*/
export interface ObjectTypeEntityMetadataLoadResponse {
	objectTypeRid: ObjectTypeRid;
	objectTypeEntityMetadata: ObjectTypeEntityMetadata;
	objectTypeSystemEntityMetadata: ObjectTypeSystemEntityMetadata | undefined;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
