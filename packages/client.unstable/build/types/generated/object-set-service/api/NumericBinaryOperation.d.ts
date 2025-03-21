import type { NumericCalculation } from "./NumericCalculation.js";
/**
* An operation on two property nodes for the purposes of defining a derived property.
*/
export interface NumericBinaryOperation {
	leftOperand: NumericCalculation;
	rightOperand: NumericCalculation;
}
