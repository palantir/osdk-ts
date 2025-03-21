import type { NumericCalculation } from "./NumericCalculation.js";
export interface CalculatedPropertyDefinition_numeric {
	type: "numeric";
	numeric: NumericCalculation;
}
/**
* A derived property that is calculated from other properties.
* It can be a literal, a reference to another property or an operation.
*/
export type CalculatedPropertyDefinition = CalculatedPropertyDefinition_numeric;
