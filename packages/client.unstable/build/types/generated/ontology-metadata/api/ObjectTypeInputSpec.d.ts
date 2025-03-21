import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyRidAndBranch } from "./OntologyRidAndBranch.js";
/**
* An input spec for an object type input.
*/
export interface ObjectTypeInputSpec {
	objectTypeRid: ObjectTypeRid;
	ontologyRidAndBranch: OntologyRidAndBranch;
}
