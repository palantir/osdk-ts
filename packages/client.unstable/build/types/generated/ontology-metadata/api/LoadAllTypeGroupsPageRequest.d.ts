import type { LoadAllTypeGroupsPageToken } from "./LoadAllTypeGroupsPageToken.js";
/**
* Request to load a page of all type groups visible to the user in an ontology.
*/
export interface LoadAllTypeGroupsPageRequest {
	pageToken: LoadAllTypeGroupsPageToken | undefined;
	pageSize: number | undefined;
	includeObjectTypeCount: boolean | undefined;
	includeTypeGroupEntitiesCount: boolean | undefined;
}
