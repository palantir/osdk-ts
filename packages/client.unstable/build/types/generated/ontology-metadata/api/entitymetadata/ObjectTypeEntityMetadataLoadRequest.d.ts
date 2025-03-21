import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Request to load ObjectTypeEntityMetadata of an ObjectType.
*/
export interface ObjectTypeEntityMetadataLoadRequest {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion | undefined;
	branch: OntologyBranchRid | undefined;
}
