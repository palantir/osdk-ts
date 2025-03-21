import type { GetActionTypesForObjectTypePageToken } from "./GetActionTypesForObjectTypePageToken.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to get ActionType(s) for an ObjectType.
*/
export interface GetActionTypesForObjectTypeRequest {
	objectType: ObjectTypeRid;
	ontologyVersion: OntologyVersion | undefined;
	pageToken: GetActionTypesForObjectTypePageToken | undefined;
	pageSize: number | undefined;
}
