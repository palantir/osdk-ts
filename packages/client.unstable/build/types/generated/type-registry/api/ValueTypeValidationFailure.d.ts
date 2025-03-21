import type { ValueTypeValidationError } from "./ValueTypeValidationError.js";
export interface ValueTypeValidationFailure {
	errors: Array<ValueTypeValidationError>;
}
