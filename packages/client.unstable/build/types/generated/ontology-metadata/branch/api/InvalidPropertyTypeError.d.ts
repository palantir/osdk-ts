import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
import type { Type } from "../../api/Type.js";
/**
* Expected local property implementing interface property to have the same type, but it did not.
*/
export interface InvalidPropertyTypeError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeRid: PropertyTypeRid;
	propertyTypeId: PropertyTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	interfacePropertyType: Type;
	objectPropertyType: Type;
}
