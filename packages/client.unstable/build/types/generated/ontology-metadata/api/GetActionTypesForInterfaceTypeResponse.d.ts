import type { ActionType } from "./ActionType.js";
import type { GetActionTypesForInterfaceTypePageToken } from "./GetActionTypesForInterfaceTypePageToken.js";
/**
* Response to GetActionTypesForInterfaceTypeRequest.
*/
export interface GetActionTypesForInterfaceTypeResponse {
	actionTypes: Array<ActionType>;
	nextPageToken: GetActionTypesForInterfaceTypePageToken | undefined;
}
