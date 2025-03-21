import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
export interface PropertyTypeIdentifier_propertyTypeId {
	type: "propertyTypeId";
	propertyTypeId: PropertyTypeId;
}
export interface PropertyTypeIdentifier_propertyTypeApiName {
	type: "propertyTypeApiName";
	propertyTypeApiName: ObjectTypeFieldApiName;
}
export interface PropertyTypeIdentifier_propertyTypeRid {
	type: "propertyTypeRid";
	propertyTypeRid: PropertyTypeRid;
}
/**
* Union type to represent the different identifiers for PropertyTypes(s).
*/
export type PropertyTypeIdentifier = PropertyTypeIdentifier_propertyTypeId | PropertyTypeIdentifier_propertyTypeApiName | PropertyTypeIdentifier_propertyTypeRid;
