import type { DataConstraintModification } from "./DataConstraintModification.js";
import type { FailureMessage } from "./FailureMessage.js";
export interface DataConstraintWrapperModification {
	failureMessage: FailureMessage | undefined;
	constraint: DataConstraintModification;
}
