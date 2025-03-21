import type { ActionType } from "./ActionType.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface ActionTypeLoadResponseV2 {
	actionType: ActionType;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
