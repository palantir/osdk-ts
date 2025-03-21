import type { ObjectType } from "../ObjectType.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Wrapper around single ObjectType contained in ObjectTypeSearchResponse.
*/
export interface ObjectTypeSearchHit {
	objectType: ObjectType;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
	score: number;
}
