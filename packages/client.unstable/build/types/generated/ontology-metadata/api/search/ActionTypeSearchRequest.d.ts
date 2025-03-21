import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { ActionTypeClause } from "./ActionTypeClause.js";
import type { ActionTypeFuzziness } from "./ActionTypeFuzziness.js";
import type { ActionTypeSearchPageToken } from "./ActionTypeSearchPageToken.js";
import type { ActionTypeSort } from "./ActionTypeSort.js";
/**
* Request to search for ActionTypes based on the given clause. ActionTypes are searched across all Ontologies
* the user has access to.
*/
export interface ActionTypeSearchRequest {
	clause: ActionTypeClause;
	excludedActionTypeRids: Array<string>;
	ontologyRids: Array<OntologyRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
	sort: ActionTypeSort | undefined;
	fuzziness: ActionTypeFuzziness | undefined;
	pageToken: ActionTypeSearchPageToken | undefined;
	pageSizeLimit: number;
}
