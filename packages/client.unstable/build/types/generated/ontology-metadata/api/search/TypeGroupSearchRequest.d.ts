import type { OntologyRid } from "../OntologyRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
import type { TypeGroupClause } from "./TypeGroupClause.js";
import type { TypeGroupFuzziness } from "./TypeGroupFuzziness.js";
import type { TypeGroupSearchPageToken } from "./TypeGroupSearchPageToken.js";
import type { TypeGroupSort } from "./TypeGroupSort.js";
/**
* Request to search for TypeGroups based on the given clause. TypeGroups are searched across
* all ontologies the user has access to.
*/
export interface TypeGroupSearchRequest {
	clause: TypeGroupClause;
	excludedTypeGroupRids: Array<TypeGroupRid>;
	ontologyRids: Array<OntologyRid>;
	sort: TypeGroupSort | undefined;
	fuzziness: TypeGroupFuzziness | undefined;
	pageToken: TypeGroupSearchPageToken | undefined;
	pageSizeLimit: number;
}
