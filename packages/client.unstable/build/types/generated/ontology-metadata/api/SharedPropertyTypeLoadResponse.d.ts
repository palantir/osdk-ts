import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { SharedPropertyType } from "./SharedPropertyType.js";
/**
* Response to a SharedPropertyTypeLoadRequest.
*/
export interface SharedPropertyTypeLoadResponse {
	sharedPropertyType: SharedPropertyType;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
