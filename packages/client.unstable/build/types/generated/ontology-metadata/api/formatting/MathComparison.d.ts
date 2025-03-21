import type { MathOperator } from "./MathOperator.js";
import type { MathValue } from "./MathValue.js";
export interface MathComparison {
	left: MathValue;
	op: MathOperator;
	right: MathValue;
}
