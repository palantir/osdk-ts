import type { DeletionMetadata } from "./DeletionMetadata.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface InterfaceTypeDeletedEvent {
	interfaceTypeRid: InterfaceTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
	deletionMetadata: DeletionMetadata | undefined;
}
