import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRule } from "./FunctionRule.js";
export interface BatchedFunctionRule {
	objectSetRidInputName: FunctionInputName;
	functionDetails: FunctionRule;
}
