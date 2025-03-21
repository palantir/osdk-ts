import type { StructParameterField } from "./StructParameterField.js";
/**
* A parameter type that consists of a Struct.
*/
export interface StructValue {
	structFields: Array<StructParameterField>;
}
