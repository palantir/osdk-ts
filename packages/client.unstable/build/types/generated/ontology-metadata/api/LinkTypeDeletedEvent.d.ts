import type { DeletionMetadata } from "./DeletionMetadata.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface LinkTypeDeletedEvent {
	linkTypeRid: LinkTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
	deletionMetadata: DeletionMetadata | undefined;
}
