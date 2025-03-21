import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface LinkTypeUpdatedEvent {
	linkTypeRid: LinkTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
}
