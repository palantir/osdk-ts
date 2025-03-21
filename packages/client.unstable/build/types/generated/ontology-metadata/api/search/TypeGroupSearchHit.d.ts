import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
/**
* Wrapper around single TypeGroupRid contained in TypeGroupSearchResponse.
*/
export interface TypeGroupSearchHit {
	typeGroupRid: TypeGroupRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
