import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* The derived property's base type has changed, either because the type it is deriving from has changed, or
* because the derived property definition has changed. However the object type it belongs to is not part
* of the modification, so this change is not allowed.
*
* The object type must be modified in the same request for it to accept the new derived property base type.
* A no-op modification suffices.
*/
export interface DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
	previousBaseType: BasePropertyType;
	newDerivedPropertyBaseType: BasePropertyType;
}
