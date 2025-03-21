import type { LoadAllInterfaceTypesPageToken } from "./LoadAllInterfaceTypesPageToken.js";
/**
* Request to load a page of all interfaces visible to the user in an ontology.
*/
export interface LoadAllInterfaceTypesPageRequest {
	pageToken: LoadAllInterfaceTypesPageToken | undefined;
	pageSize: number | undefined;
}
