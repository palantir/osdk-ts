import type { BasePropertyType } from "./BasePropertyType.js";
export interface PropertyTypeReference_baseType {
	type: "baseType";
	baseType: BasePropertyType;
}
/**
* A reference to a base type.
*/
export type PropertyTypeReference = PropertyTypeReference_baseType;
