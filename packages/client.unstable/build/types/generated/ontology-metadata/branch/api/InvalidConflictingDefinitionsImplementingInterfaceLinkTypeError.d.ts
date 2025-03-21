import type { InterfaceLinkTypeRidOrIdInRequest } from "../../api/InterfaceLinkTypeRidOrIdInRequest.js";
import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An interface link type constraint is fulfilled more than once for an interface and the multiple
* implementations are not the same. When an interface and its super interface are both explicitly implemented by
* an object type, the implementation for an inherited link on the interface must be the same as the
* implementation of the link for the super interface. Additionally, the implementation of two child interfaces
* of the same super interface must have the same implementation for any inherited links.
*/
export interface InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
	objectTypeRid: ObjectTypeRid | undefined;
	objectTypeId: ObjectTypeId | undefined;
	linkTypeIds: Array<LinkTypeId>;
	otherLinkTypeIds: Array<LinkTypeId>;
}
