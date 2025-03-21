import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
/**
* The object implementing the interface does not have all required shared properties.
*/
export interface MissingSharedPropertyError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	interfaceRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	missingSharedPropertyTypeRidOrIdInRequests: Array<SharedPropertyTypeRidOrIdInRequest>;
}
