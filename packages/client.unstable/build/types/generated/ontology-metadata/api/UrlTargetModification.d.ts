import type { CarbonWorkspaceUrlTarget } from "./CarbonWorkspaceUrlTarget.js";
import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { NewObjectUrlTargetModification } from "./NewObjectUrlTargetModification.js";
import type { RidUrlTargetModification } from "./RidUrlTargetModification.js";
export interface UrlTargetModification_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValueModification;
}
export interface UrlTargetModification_rid {
	type: "rid";
	rid: RidUrlTargetModification;
}
export interface UrlTargetModification_relativeUrlString {
	type: "relativeUrlString";
	relativeUrlString: string;
}
export interface UrlTargetModification_newObject {
	type: "newObject";
	newObject: NewObjectUrlTargetModification;
}
export interface UrlTargetModification_carbonWorkspace {
	type: "carbonWorkspace";
	carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
* The target for generating a URL.
*/
export type UrlTargetModification = UrlTargetModification_logicRuleValue | UrlTargetModification_rid | UrlTargetModification_relativeUrlString | UrlTargetModification_newObject | UrlTargetModification_carbonWorkspace;
