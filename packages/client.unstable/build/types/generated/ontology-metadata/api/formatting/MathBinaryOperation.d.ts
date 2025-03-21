import type { MathBinaryOperator } from "./MathBinaryOperator.js";
import type { MathValue } from "./MathValue.js";
export interface MathBinaryOperation {
	left: MathValue;
	op: MathBinaryOperator;
	right: MathValue;
}
