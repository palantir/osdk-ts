import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
/**
* Request to load security provenance information for ObjectTypes and LinkTypes.
*/
export interface GetSecurityProvenanceRequestOld {
	objectTypes: Array<ObjectTypeRid>;
	linkTypes: Array<LinkTypeRid>;
}
