import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { LinkTypeSecurityProvenanceLoadResponse } from "./LinkTypeSecurityProvenanceLoadResponse.js";
import type { ObjectTypeSecurityProvenanceLoadResponse } from "./ObjectTypeSecurityProvenanceLoadResponse.js";
/**
* Response to GetSecurisyProvenanceRequest.
*/
export interface GetSecurityProvenanceResponse {
	objectTypes: Record<ObjectTypeRid, ObjectTypeSecurityProvenanceLoadResponse>;
	linkTypes: Record<LinkTypeRid, LinkTypeSecurityProvenanceLoadResponse>;
}
