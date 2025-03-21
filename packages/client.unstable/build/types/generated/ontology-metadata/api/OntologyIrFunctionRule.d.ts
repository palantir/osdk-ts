import type { ExperimentalDeclarativeEditInformation } from "./ExperimentalDeclarativeEditInformation.js";
import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionRuleCustomExecutionMode } from "./FunctionRuleCustomExecutionMode.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
/**
* A Function to be executed with action input parameters.
*/
export interface OntologyIrFunctionRule {
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, OntologyIrLogicRuleValue>;
	customExecutionMode: FunctionRuleCustomExecutionMode | undefined;
	experimentalDeclarativeEditInformation: ExperimentalDeclarativeEditInformation | undefined;
}
