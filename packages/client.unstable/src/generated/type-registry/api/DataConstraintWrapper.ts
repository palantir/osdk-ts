/**/
import type { FailureMessage } from "./FailureMessage.js";
import type { DataConstraint } from "./DataConstraint.js";
export interface DataConstraintWrapper {
failureMessage: FailureMessage | undefined;
constraint: DataConstraint;
}