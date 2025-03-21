import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyBranchRid } from "./OntologyBranchRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to batch get LinkType(s) for ObjectType(s).
*/
export interface GetLinkTypesForObjectTypesRequest {
	objectTypeVersions: Record<ObjectTypeRid, OntologyVersion | undefined>;
	objectTypeBranches: Record<ObjectTypeRid, OntologyBranchRid | undefined>;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
