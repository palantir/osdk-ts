import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* The derived properties definition is referring to a foreign property type that does not exist or is deleted.
*/
export interface ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError {
	objectType: ObjectTypeRid;
	foreignObjectType: ObjectTypeRid;
	foreignPropertyTypeId: PropertyTypeId | undefined;
	foreignPropertyTypeRid: PropertyTypeRid | undefined;
}
