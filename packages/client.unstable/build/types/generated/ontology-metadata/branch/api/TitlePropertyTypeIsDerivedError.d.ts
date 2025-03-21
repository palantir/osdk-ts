import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* The title property type of an object type cannot be backed by a derived properties datasource.
*/
export interface TitlePropertyTypeIsDerivedError {
	objectType: ObjectTypeRid;
	titlePropertyType: PropertyTypeId;
}
