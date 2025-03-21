import type { OntologyIrActionLogRule } from "./OntologyIrActionLogRule.js";
import type { OntologyIrLogicRule } from "./OntologyIrLogicRule.js";
/**
* The ActionLogic in an ActionType map the Parameters to what edits should be made in Phonograph. It employs
* LogicRules for the core Action logic and, optionally, an ActionLogRule for capturing a record of the Action
* execution. We don't allow the mixing of FunctionRule with other LogicRules in the same ActionType.
*/
export interface OntologyIrActionLogic {
	rules: Array<OntologyIrLogicRule>;
	actionLogRule: OntologyIrActionLogRule | undefined;
}
