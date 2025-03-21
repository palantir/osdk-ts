import type { BasePropertyType } from "./BasePropertyType.js";
export interface DataType_baseType {
	type: "baseType";
	baseType: BasePropertyType;
}
/**
* Data type corresponding to `Type`. Differently from `Type` this only encodes the type of data, without
* encoding e.g. analyzer settings. Prefer this to `Type` whenever e.g. type-checking against object properties.
*/
export type DataType = DataType_baseType;
