import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
export interface PropertyTypeIdentifierInRequest_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeId;
}
export interface PropertyTypeIdentifierInRequest_propertyTypeRid {
	type: "propertyTypeRid";
	propertyTypeRid: PropertyTypeRid;
}
export type PropertyTypeIdentifierInRequest = PropertyTypeIdentifierInRequest_propertyType | PropertyTypeIdentifierInRequest_propertyTypeRid;
