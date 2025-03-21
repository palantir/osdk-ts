import type { OntologyRid } from "../OntologyRid.js";
import type { InterfaceTypeClause } from "./InterfaceTypeClause.js";
import type { InterfaceTypeFuzziness } from "./InterfaceTypeFuzziness.js";
import type { InterfaceTypeSearchPageToken } from "./InterfaceTypeSearchPageToken.js";
import type { InterfaceTypeSort } from "./InterfaceTypeSort.js";
/**
* Request to search for InterfaceTypes based on the given clause. InterfaceTypes are searched across
* all ontologies the user has access to.
*/
export interface InterfaceTypeSearchRequest {
	clause: InterfaceTypeClause;
	excludedInterfaceTypeRids: Array<string>;
	ontologyRids: Array<OntologyRid>;
	sort: InterfaceTypeSort | undefined;
	fuzziness: InterfaceTypeFuzziness | undefined;
	pageToken: InterfaceTypeSearchPageToken | undefined;
	pageSizeLimit: number;
}
