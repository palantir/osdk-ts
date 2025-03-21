import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { DeletionMetadata } from "./DeletionMetadata.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface ActionTypeDeletedEvent {
	actionTypeRid: ActionTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
	deletionMetadata: DeletionMetadata | undefined;
}
