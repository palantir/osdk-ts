import type { ValueReference } from "./ValueReference.js";
export interface ValueReferenceOrStringConstant_constant {
	type: "constant";
	constant: string;
}
export interface ValueReferenceOrStringConstant_reference {
	type: "reference";
	reference: ValueReference;
}
export type ValueReferenceOrStringConstant = ValueReferenceOrStringConstant_constant | ValueReferenceOrStringConstant_reference;
