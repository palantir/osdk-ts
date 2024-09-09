/**/
import type { FailureMessage } from "./FailureMessage.js";
import type { DataConstraintModification } from "./DataConstraintModification.js";
export interface DataConstraintWrapperModification {
failureMessage: FailureMessage | undefined;
constraint: DataConstraintModification;
}