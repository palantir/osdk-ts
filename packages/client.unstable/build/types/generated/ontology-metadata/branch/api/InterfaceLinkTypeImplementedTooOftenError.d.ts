import type { InterfaceLinkTypeRidOrIdInRequest } from "../../api/InterfaceLinkTypeRidOrIdInRequest.js";
import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An interface link type with a SINGLE cardinality is implemented more than once.
*/
export interface InterfaceLinkTypeImplementedTooOftenError {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
	objectTypeRid: ObjectTypeRid | undefined;
	objectTypeId: ObjectTypeId | undefined;
	linkTypeIds: Array<LinkTypeId>;
}
