import type { ValueReference } from "./ValueReference.js";
export interface ValueReferenceOrDatetimeConstant_constant {
	type: "constant";
	constant: string;
}
export interface ValueReferenceOrDatetimeConstant_reference {
	type: "reference";
	reference: ValueReference;
}
export type ValueReferenceOrDatetimeConstant = ValueReferenceOrDatetimeConstant_constant | ValueReferenceOrDatetimeConstant_reference;
