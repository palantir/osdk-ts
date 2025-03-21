import type { LoadAllSharedPropertyTypesPageItem } from "./LoadAllSharedPropertyTypesPageItem.js";
import type { LoadAllSharedPropertyTypesPageToken } from "./LoadAllSharedPropertyTypesPageToken.js";
/**
* Response to LoadAllSharedPropertyTypesPageRequest.
*/
export interface LoadAllSharedPropertyTypesPageResponse {
	sharedPropertyTypes: Array<LoadAllSharedPropertyTypesPageItem>;
	nextPageToken: LoadAllSharedPropertyTypesPageToken | undefined;
}
