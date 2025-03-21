import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { ObjectTypeProvenanceProperties } from "./ObjectTypeProvenanceProperties.js";
/**
* Request to load security provenance information for ObjectTypes and LinkTypes.
*/
export interface GetSecurityProvenanceRequest {
	objectTypes: Array<ObjectTypeRid>;
	objectTypeProvenanceProperties: ObjectTypeProvenanceProperties | undefined;
	linkTypes: Array<LinkTypeRid>;
}
