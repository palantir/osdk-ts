import type { ActionLogNotRequired } from "./ActionLogNotRequired.js";
import type { ActionLogRequiredForObjectType } from "./ActionLogRequiredForObjectType.js";
export interface ActionLogRequirednessSetting_actionLogNotRequired {
	type: "actionLogNotRequired";
	actionLogNotRequired: ActionLogNotRequired;
}
export interface ActionLogRequirednessSetting_actionLogRequiredForObjectType {
	type: "actionLogRequiredForObjectType";
	actionLogRequiredForObjectType: ActionLogRequiredForObjectType;
}
/**
* Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
* requiredness may be introduced.
*/
export type ActionLogRequirednessSetting = ActionLogRequirednessSetting_actionLogNotRequired | ActionLogRequirednessSetting_actionLogRequiredForObjectType;
