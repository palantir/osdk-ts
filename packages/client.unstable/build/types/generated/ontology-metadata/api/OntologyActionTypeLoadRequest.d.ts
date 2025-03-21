import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface OntologyActionTypeLoadRequest {
	actionTypeRid: ActionTypeRid;
	ontologyVersion: OntologyVersion | undefined;
}
