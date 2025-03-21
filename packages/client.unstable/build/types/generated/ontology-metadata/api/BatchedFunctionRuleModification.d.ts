import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRuleModification } from "./FunctionRuleModification.js";
export interface BatchedFunctionRuleModification {
	objectSetRidInputName: FunctionInputName;
	functionDetails: FunctionRuleModification;
}
