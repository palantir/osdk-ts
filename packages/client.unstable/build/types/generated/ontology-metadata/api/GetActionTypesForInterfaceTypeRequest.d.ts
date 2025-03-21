import type { GetActionTypesForInterfaceTypePageToken } from "./GetActionTypesForInterfaceTypePageToken.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to get ActionType(s) for an InterfaceType.
*/
export interface GetActionTypesForInterfaceTypeRequest {
	interfaceType: InterfaceTypeRid;
	ontologyVersion: OntologyVersion | undefined;
	pageToken: GetActionTypesForInterfaceTypePageToken | undefined;
	pageSize: number | undefined;
}
