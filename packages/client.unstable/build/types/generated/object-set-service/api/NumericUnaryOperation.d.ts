import type { NumericCalculation } from "./NumericCalculation.js";
/**
* An operation on one property node for the purposes of defining a derived property.
*/
export interface NumericUnaryOperation {
	operand: NumericCalculation;
}
