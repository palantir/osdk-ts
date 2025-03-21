import type { NumericBinaryOperation } from "./NumericBinaryOperation.js";
import type { NumericUnaryOperation } from "./NumericUnaryOperation.js";
export interface NumericOperation_add {
	type: "add";
	add: NumericBinaryOperation;
}
export interface NumericOperation_subtract {
	type: "subtract";
	subtract: NumericBinaryOperation;
}
export interface NumericOperation_divide {
	type: "divide";
	divide: NumericBinaryOperation;
}
export interface NumericOperation_multiply {
	type: "multiply";
	multiply: NumericBinaryOperation;
}
export interface NumericOperation_negate {
	type: "negate";
	negate: NumericUnaryOperation;
}
export interface NumericOperation_absolute {
	type: "absolute";
	absolute: NumericUnaryOperation;
}
/**
* An operation on one or two property nodes for the purposes of defining a derived property.
*/
export type NumericOperation = NumericOperation_add | NumericOperation_subtract | NumericOperation_divide | NumericOperation_multiply | NumericOperation_negate | NumericOperation_absolute;
