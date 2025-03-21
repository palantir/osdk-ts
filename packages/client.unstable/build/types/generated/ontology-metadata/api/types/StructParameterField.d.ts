import type { StructFieldDataValue } from "./StructFieldDataValue.js";
import type { StructParameterFieldApiName } from "./StructParameterFieldApiName.js";
/**
* A struct field of a struct parameter.
*/
export interface StructParameterField {
	structFieldApiName: StructParameterFieldApiName;
	structFieldDataValue: StructFieldDataValue;
}
