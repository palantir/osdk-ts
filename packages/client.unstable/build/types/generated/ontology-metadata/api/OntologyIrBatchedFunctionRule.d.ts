import type { FunctionInputName } from "./FunctionInputName.js";
import type { OntologyIrFunctionRule } from "./OntologyIrFunctionRule.js";
export interface OntologyIrBatchedFunctionRule {
	objectSetRidInputName: FunctionInputName;
	functionDetails: OntologyIrFunctionRule;
}
