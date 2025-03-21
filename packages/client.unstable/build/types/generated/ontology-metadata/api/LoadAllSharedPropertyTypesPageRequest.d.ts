import type { LoadAllSharedPropertyTypesPageToken } from "./LoadAllSharedPropertyTypesPageToken.js";
/**
* Request to load a page of all SharedPropertyTypes visible to the user in an Ontology.
*/
export interface LoadAllSharedPropertyTypesPageRequest {
	pageToken: LoadAllSharedPropertyTypesPageToken | undefined;
	pageSize: number | undefined;
}
