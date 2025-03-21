import type { ActionType } from "../ActionType.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Wrapper around single ActionType contained in ActionTypeSearchResponse.
*/
export interface ActionTypeSearchHit {
	actionType: ActionType;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
