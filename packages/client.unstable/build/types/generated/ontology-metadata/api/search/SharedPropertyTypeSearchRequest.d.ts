import type { OntologyRid } from "../OntologyRid.js";
import type { SharedPropertyTypeClause } from "./SharedPropertyTypeClause.js";
import type { SharedPropertyTypeFuzziness } from "./SharedPropertyTypeFuzziness.js";
import type { SharedPropertyTypeSearchPageToken } from "./SharedPropertyTypeSearchPageToken.js";
import type { SharedPropertyTypeSort } from "./SharedPropertyTypeSort.js";
/**
* Request to search for SharedPropertyTypes based on the given clause. SharedPropertyTypes are searched across
* all ontologies the user has access to.
*/
export interface SharedPropertyTypeSearchRequest {
	clause: SharedPropertyTypeClause;
	excludedSharedPropertyTypeRids: Array<string>;
	ontologyRids: Array<OntologyRid>;
	sort: SharedPropertyTypeSort | undefined;
	fuzziness: SharedPropertyTypeFuzziness | undefined;
	pageToken: SharedPropertyTypeSearchPageToken | undefined;
	pageSizeLimit: number;
}
