import type { MathUnaryOperator } from "./MathUnaryOperator.js";
import type { MathValue } from "./MathValue.js";
export interface MathUnaryOperation {
	property: MathValue;
	op: MathUnaryOperator;
}
