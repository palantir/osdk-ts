import type { StructFieldBaseParameterType } from "./StructFieldBaseParameterType.js";
import type { StructParameterFieldApiName } from "./StructParameterFieldApiName.js";
/**
* StructListType specifies that this parameter must be a list of Structs.
*/
export interface StructListType {
	structFieldTypes: Record<StructParameterFieldApiName, StructFieldBaseParameterType>;
}
