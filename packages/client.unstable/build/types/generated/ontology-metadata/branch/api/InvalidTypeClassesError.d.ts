import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
import type { TypeClass } from "../../api/TypeClass.js";
export interface InvalidTypeClassesError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeRid: PropertyTypeRid;
	propertyTypeId: PropertyTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	interfacePropertyTypeClasses: Array<TypeClass>;
	objectPropertyTypeClasses: Array<TypeClass>;
}
