import type { ActionLogRequirednessSetting } from "./ActionLogRequirednessSetting.js";
/**
* Types of Action Log requiredness. Currently logging is either required or not but in future other kinds of
* requiredness, such as property-level logging requiredness, may be introduced.
*/
export interface ActionLogRequirednessMetadata {
	actionLogRequirednessSetting: ActionLogRequirednessSetting;
	lastUpdated: string;
}
