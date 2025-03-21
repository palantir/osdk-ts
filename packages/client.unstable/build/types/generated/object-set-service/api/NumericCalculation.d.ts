import type { NumericLiteral } from "./NumericLiteral.js";
import type { NumericOperation } from "./NumericOperation.js";
import type { PropertyId } from "./PropertyId.js";
export interface NumericCalculation_operation {
	type: "operation";
	operation: NumericOperation;
}
export interface NumericCalculation_literal {
	type: "literal";
	literal: NumericLiteral;
}
export interface NumericCalculation_propertyId {
	type: "propertyId";
	propertyId: PropertyId;
}
/**
* A calculation node that is used to define a derived property via a numeric operation.
*/
export type NumericCalculation = NumericCalculation_operation | NumericCalculation_literal | NumericCalculation_propertyId;
