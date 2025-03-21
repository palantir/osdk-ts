import type { DeletionMetadata } from "./DeletionMetadata.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface ObjectTypeDeletedEvent {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
	deletionMetadata: DeletionMetadata | undefined;
}
