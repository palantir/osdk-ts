import type { ObjectTypeClause } from "./ObjectTypeClause.js";
import type { ObjectTypeSearchPageToken } from "./ObjectTypeSearchPageToken.js";
import type { ObjectTypeSort } from "./ObjectTypeSort.js";
/**
* Request to search for ObjectTypes based on the given clause. ObjectTypes are searched across all Ontologies
* the user has access to.
*/
export interface ObjectTypeSearchRequest {
	clause: ObjectTypeClause;
	sort: ObjectTypeSort | undefined;
	pageToken: ObjectTypeSearchPageToken | undefined;
	pageSizeLimit: number;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
