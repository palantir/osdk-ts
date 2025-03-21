import type { InterfaceType } from "../InterfaceType.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Wrapper around single InterfaceType contained in InterfaceTypeSearchResponse.
*/
export interface InterfaceTypeSearchHit {
	interfaceType: InterfaceType;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
