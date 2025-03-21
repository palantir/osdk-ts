import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
import type { ValueTypeReference } from "../../api/ValueTypeReference.js";
export interface InvalidValueTypeError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeRid: PropertyTypeRid;
	propertyTypeId: PropertyTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	interfacePropertyValueType: ValueTypeReference | undefined;
	objectPropertyValueType: ValueTypeReference | undefined;
}
