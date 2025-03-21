import type { DoubleLiteral } from "./DoubleLiteral.js";
export interface NumericLiteral_double {
	type: "double";
	double: DoubleLiteral;
}
/**
* A literal value for the purposes of defining a derived property via a numeric operation.
*/
export type NumericLiteral = NumericLiteral_double;
