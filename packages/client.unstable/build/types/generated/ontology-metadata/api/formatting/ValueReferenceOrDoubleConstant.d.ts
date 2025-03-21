import type { ValueReference } from "./ValueReference.js";
export interface ValueReferenceOrDoubleConstant_constant {
	type: "constant";
	constant: number;
}
export interface ValueReferenceOrDoubleConstant_reference {
	type: "reference";
	reference: ValueReference;
}
export type ValueReferenceOrDoubleConstant = ValueReferenceOrDoubleConstant_constant | ValueReferenceOrDoubleConstant_reference;
