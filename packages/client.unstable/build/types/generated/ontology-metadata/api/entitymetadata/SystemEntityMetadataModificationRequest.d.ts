import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { LinkTypeSystemEntityMetadataModification } from "./LinkTypeSystemEntityMetadataModification.js";
import type { ObjectTypeSystemEntityMetadataModification } from "./ObjectTypeSystemEntityMetadataModification.js";
/**
* Request to modify the SystemEntityMetadata of the specified ObjectType(s)/LinkType(s).
*/
export interface SystemEntityMetadataModificationRequest {
	objectTypeSystemEntityMetadata: Record<ObjectTypeRid, ObjectTypeSystemEntityMetadataModification>;
	linkTypeSystemEntityMetadata: Record<LinkTypeRid, LinkTypeSystemEntityMetadataModification>;
	expectedOntologyVersion: OntologyVersion;
}
