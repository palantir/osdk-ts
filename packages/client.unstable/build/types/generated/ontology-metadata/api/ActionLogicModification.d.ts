import type { ActionLogRuleModification } from "./ActionLogRuleModification.js";
import type { LogicRuleModification } from "./LogicRuleModification.js";
/**
* Same as ActionLogic above, except it uses modification types to allow the usage of ridOrIdInRequest types to
* reference SharedPropertyTypes and InterfaceTypes in the same modifyOntology request as they are created.
*/
export interface ActionLogicModification {
	rules: Array<LogicRuleModification>;
	actionLogRule: ActionLogRuleModification | undefined;
}
