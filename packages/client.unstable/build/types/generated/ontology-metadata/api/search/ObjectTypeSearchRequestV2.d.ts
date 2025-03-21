import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { ObjectTypeClause } from "./ObjectTypeClause.js";
import type { ObjectTypeFuzziness } from "./ObjectTypeFuzziness.js";
import type { ObjectTypeSearchPageTokenV2 } from "./ObjectTypeSearchPageTokenV2.js";
import type { ObjectTypeSort } from "./ObjectTypeSort.js";
/**
* Request to search for ObjectTypes based on the given clause. ObjectTypes are searched across all Ontologies
* the user has access to.
*/
export interface ObjectTypeSearchRequestV2 {
	clause: ObjectTypeClause;
	semanticSearchQuery: string | undefined;
	ontologyRids: Array<OntologyRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
	excludedObjectTypeRids: Array<ObjectTypeRid>;
	sort: ObjectTypeSort | undefined;
	fuzziness: ObjectTypeFuzziness | undefined;
	pageToken: ObjectTypeSearchPageTokenV2 | undefined;
	pageSizeLimit: number;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
