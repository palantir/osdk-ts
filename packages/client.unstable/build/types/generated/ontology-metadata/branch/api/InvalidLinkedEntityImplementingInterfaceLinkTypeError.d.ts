import type { InterfaceLinkTypeRidOrIdInRequest } from "../../api/InterfaceLinkTypeRidOrIdInRequest.js";
import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { LinkedEntityTypeRidOrIdInRequest } from "../../api/LinkedEntityTypeRidOrIdInRequest.js";
import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An interface link type constraint is not fulfilled because the local linked entity type is different than the
* interface link type's linked entity type.
*/
export interface InvalidLinkedEntityImplementingInterfaceLinkTypeError {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
	objectTypeRid: ObjectTypeRid | undefined;
	objectTypeId: ObjectTypeId | undefined;
	linkTypeId: LinkTypeId;
	expectedLinkedEntity: LinkedEntityTypeRidOrIdInRequest;
	actualLinkedEntity: LinkedEntityTypeRidOrIdInRequest;
}
