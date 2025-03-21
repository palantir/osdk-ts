import type { LoadAllActionTypesPageItem } from "./LoadAllActionTypesPageItem.js";
import type { LoadAllActionTypesPageToken } from "./LoadAllActionTypesPageToken.js";
/**
* Response to LoadAllActionTypesPageRequest.
*/
export interface LoadAllActionTypesPageResponse {
	actionTypes: Array<LoadAllActionTypesPageItem>;
	nextPageToken: LoadAllActionTypesPageToken | undefined;
}
