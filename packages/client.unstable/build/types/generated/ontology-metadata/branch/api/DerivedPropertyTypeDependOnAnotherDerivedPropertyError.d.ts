import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* A derived property type is deriving from another derived property. This is not allowed.
*/
export interface DerivedPropertyTypeDependOnAnotherDerivedPropertyError {
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeId: PropertyTypeId | undefined;
	objectTypeRid: ObjectTypeRid | undefined;
	propertyTypeRid: PropertyTypeRid | undefined;
}
