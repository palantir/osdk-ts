import type { ConditionModification } from "./ConditionModification.js";
import type { ParameterValidationBlockOverrideModification } from "./ParameterValidationBlockOverrideModification.js";
export interface ConditionalOverrideModification {
	condition: ConditionModification;
	parameterBlockOverrides: Array<ParameterValidationBlockOverrideModification>;
}
