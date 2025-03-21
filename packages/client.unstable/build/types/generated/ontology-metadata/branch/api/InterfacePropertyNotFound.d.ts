import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
/**
* The object type specifies an implementation mapping for an interface property which does not exist.
*/
export interface InterfacePropertyNotFound {
	objectTypeRid: ObjectTypeRid | undefined;
	objectTypeId: ObjectTypeId | undefined;
	interfaceRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
}
