import type { StructValue } from "./StructValue.js";
/**
* A parameter type that consists of a list of Structs.
*/
export interface StructListValue {
	structs: Array<StructValue>;
}
