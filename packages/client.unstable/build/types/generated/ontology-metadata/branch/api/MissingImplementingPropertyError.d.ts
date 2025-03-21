import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
/**
* The object type implementing the interface has a property fulfilling the shared property that does not exist.
*/
export interface MissingImplementingPropertyError {
	objectTypeRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	interfaceRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	missingPropertyId: PropertyTypeId;
}
