import type { LoadAllObjectTypesPageItem } from "./LoadAllObjectTypesPageItem.js";
import type { LoadAllObjectTypesPageToken } from "./LoadAllObjectTypesPageToken.js";
/**
* Response to LoadAllObjectTypesPageRequest.
*/
export interface LoadAllObjectTypesFromOntologyPageResponse {
	objectTypes: Array<LoadAllObjectTypesPageItem>;
	nextPageToken: LoadAllObjectTypesPageToken | undefined;
}
