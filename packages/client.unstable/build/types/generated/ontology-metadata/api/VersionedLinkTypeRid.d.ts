import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* A {@link LinkTypeRid} with the {@link OntologyVersion}.
*/
export interface VersionedLinkTypeRid {
	linkTypeRid: LinkTypeRid;
	ontologyVersion: OntologyVersion;
}
