import type { CarbonWorkspaceUrlTarget } from "./CarbonWorkspaceUrlTarget.js";
import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { NewObjectUrlTarget } from "./NewObjectUrlTarget.js";
import type { RidUrlTarget } from "./RidUrlTarget.js";
export interface UrlTarget_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValue;
}
export interface UrlTarget_rid {
	type: "rid";
	rid: RidUrlTarget;
}
export interface UrlTarget_relativeUrlString {
	type: "relativeUrlString";
	relativeUrlString: string;
}
export interface UrlTarget_newObject {
	type: "newObject";
	newObject: NewObjectUrlTarget;
}
export interface UrlTarget_carbonWorkspace {
	type: "carbonWorkspace";
	carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
* The target for generating a URL.
*/
export type UrlTarget = UrlTarget_logicRuleValue | UrlTarget_rid | UrlTarget_relativeUrlString | UrlTarget_newObject | UrlTarget_carbonWorkspace;
