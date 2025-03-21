import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* The derived properties definition backs a shared property type, but its definition does not
* match the shared property type definition.
*/
export interface DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
	derivedPropertyTypeBaseType: BasePropertyType;
	sharedPropertyTypeBaseType: BasePropertyType;
}
