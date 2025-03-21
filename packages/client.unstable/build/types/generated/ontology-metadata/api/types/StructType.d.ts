import type { StructFieldBaseParameterType } from "./StructFieldBaseParameterType.js";
import type { StructParameterFieldApiName } from "./StructParameterFieldApiName.js";
/**
* StructType specifies that this parameter must be a Struct.
*/
export interface StructType {
	structFieldTypes: Record<StructParameterFieldApiName, StructFieldBaseParameterType>;
}
