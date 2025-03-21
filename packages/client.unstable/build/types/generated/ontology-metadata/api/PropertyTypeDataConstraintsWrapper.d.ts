import type { FailureMessage } from "./FailureMessage.js";
import type { PropertyTypeDataConstraints } from "./PropertyTypeDataConstraints.js";
export interface PropertyTypeDataConstraintsWrapper {
	failureMessage: FailureMessage | undefined;
	constraints: PropertyTypeDataConstraints;
}
