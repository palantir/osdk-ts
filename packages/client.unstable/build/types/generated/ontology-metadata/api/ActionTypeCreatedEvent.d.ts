import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface ActionTypeCreatedEvent {
	actionTypeRid: ActionTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
}
