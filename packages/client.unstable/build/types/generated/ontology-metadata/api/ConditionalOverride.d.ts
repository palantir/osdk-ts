import type { Condition } from "./Condition.js";
import type { ParameterValidationBlockOverride } from "./ParameterValidationBlockOverride.js";
export interface ConditionalOverride {
	condition: Condition;
	parameterBlockOverrides: Array<ParameterValidationBlockOverride>;
}
