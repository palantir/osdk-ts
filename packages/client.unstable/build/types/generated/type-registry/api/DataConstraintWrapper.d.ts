import type { DataConstraint } from "./DataConstraint.js";
import type { FailureMessage } from "./FailureMessage.js";
export interface DataConstraintWrapper {
	failureMessage: FailureMessage | undefined;
	constraint: DataConstraint;
}
