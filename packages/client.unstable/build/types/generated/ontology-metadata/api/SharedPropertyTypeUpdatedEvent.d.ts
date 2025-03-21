import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface SharedPropertyTypeUpdatedEvent {
	sharedPropertyTypeRid: SharedPropertyTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
}
