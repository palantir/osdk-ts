import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
export interface StoragePropertyTypeIdentifierInRequest_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeId;
}
export interface StoragePropertyTypeIdentifierInRequest_propertyTypeRid {
	type: "propertyTypeRid";
	propertyTypeRid: PropertyTypeRid;
}
export type StoragePropertyTypeIdentifierInRequest = StoragePropertyTypeIdentifierInRequest_propertyType | StoragePropertyTypeIdentifierInRequest_propertyTypeRid;
