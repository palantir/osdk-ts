import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* The type of the foreign property type that the derived property definition is deriving from is not
* compatible with the derived property definition. For example, if the definition is "average", the
* foreign property type must be of a numeric base type.
*/
export interface DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
	foreignObjectTypeRid: ObjectTypeRid;
	foreignPropertyTypeRid: PropertyTypeRid;
	foreignPropertyTypeBaseType: BasePropertyType;
	foreignPropertyTypeRequirement: string;
}
