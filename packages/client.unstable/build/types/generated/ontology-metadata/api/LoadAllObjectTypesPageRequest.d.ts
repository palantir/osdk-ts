import type { LoadAllObjectTypesPageToken } from "./LoadAllObjectTypesPageToken.js";
/**
* Request to load a page of all ObjectTypes visible to the user in an Ontology.
*/
export interface LoadAllObjectTypesPageRequest {
	pageToken: LoadAllObjectTypesPageToken | undefined;
	pageSizeLimit: number;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
