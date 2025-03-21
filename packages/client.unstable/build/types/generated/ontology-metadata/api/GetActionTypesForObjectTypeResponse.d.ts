import type { ActionType } from "./ActionType.js";
import type { GetActionTypesForObjectTypePageToken } from "./GetActionTypesForObjectTypePageToken.js";
/**
* Response to GetActionTypesForObjectTypeRequest.
*/
export interface GetActionTypesForObjectTypeResponse {
	actionTypes: Array<ActionType>;
	nextPageToken: GetActionTypesForObjectTypePageToken | undefined;
}
