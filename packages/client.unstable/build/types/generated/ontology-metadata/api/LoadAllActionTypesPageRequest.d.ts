import type { LoadAllActionTypesPageToken } from "./LoadAllActionTypesPageToken.js";
/**
* Request to load a page of all ActionTypes visible to the user in an Ontology.
*/
export interface LoadAllActionTypesPageRequest {
	pageToken: LoadAllActionTypesPageToken | undefined;
	pageSizeLimit: number;
}
