import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An object type implements an interface by explicitly mapping properties. One of the SPTs on the interface has
* the same apiName as a local property on the object type without the two being explicitly mapped. This is
* disallowed.
*/
export interface LocalAndSharedPropertyTypesConflictingApiNamesError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	propertyTypeRid: PropertyTypeRid;
	propertyTypeId: PropertyTypeId | undefined;
}
