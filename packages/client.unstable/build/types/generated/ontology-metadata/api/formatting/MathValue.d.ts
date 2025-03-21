import type { MathBinaryOperation } from "./MathBinaryOperation.js";
import type { MathUnaryOperation } from "./MathUnaryOperation.js";
import type { ValueReference } from "./ValueReference.js";
export interface MathValue_reference {
	type: "reference";
	reference: ValueReference;
}
export interface MathValue_constant {
	type: "constant";
	constant: number;
}
export interface MathValue_binaryOperation {
	type: "binaryOperation";
	binaryOperation: MathBinaryOperation;
}
export interface MathValue_unaryOperation {
	type: "unaryOperation";
	unaryOperation: MathUnaryOperation;
}
export type MathValue = MathValue_reference | MathValue_constant | MathValue_binaryOperation | MathValue_unaryOperation;
