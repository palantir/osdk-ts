import type { ActionLogNotRequiredModification } from "./ActionLogNotRequiredModification.js";
import type { ActionLogRequiredModification } from "./ActionLogRequiredModification.js";
export interface ActionLogRequirednessModification_actionLogNotRequired {
	type: "actionLogNotRequired";
	actionLogNotRequired: ActionLogNotRequiredModification;
}
export interface ActionLogRequirednessModification_actionLogRequired {
	type: "actionLogRequired";
	actionLogRequired: ActionLogRequiredModification;
}
/**
* The constraints on Action Log requiredness when the ObjectType is being edited. Currently logging is either
* required or it is not, but further types of constraint may be added in the future.
*/
export type ActionLogRequirednessModification = ActionLogRequirednessModification_actionLogNotRequired | ActionLogRequirednessModification_actionLogRequired;
