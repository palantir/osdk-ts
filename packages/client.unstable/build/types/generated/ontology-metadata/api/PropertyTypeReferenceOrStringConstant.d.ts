import type { PropertyTypeId } from "./PropertyTypeId.js";
export interface PropertyTypeReferenceOrStringConstant_constant {
	type: "constant";
	constant: string;
}
export interface PropertyTypeReferenceOrStringConstant_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeId;
}
export type PropertyTypeReferenceOrStringConstant = PropertyTypeReferenceOrStringConstant_constant | PropertyTypeReferenceOrStringConstant_propertyType;
