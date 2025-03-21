import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { SharedPropertyType } from "../SharedPropertyType.js";
/**
* Wrapper around single SharedPropertyType contained in SharedPropertyTypeSearchResponse.
*/
export interface SharedPropertyTypeSearchHit {
	sharedPropertyType: SharedPropertyType;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
