import type { OntologyIrCarbonWorkspaceUrlTarget } from "./OntologyIrCarbonWorkspaceUrlTarget.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { OntologyIrNewObjectUrlTarget } from "./OntologyIrNewObjectUrlTarget.js";
import type { OntologyIrRidUrlTarget } from "./OntologyIrRidUrlTarget.js";
export interface OntologyIrUrlTarget_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: OntologyIrLogicRuleValue;
}
export interface OntologyIrUrlTarget_rid {
	type: "rid";
	rid: OntologyIrRidUrlTarget;
}
export interface OntologyIrUrlTarget_relativeUrlString {
	type: "relativeUrlString";
	relativeUrlString: string;
}
export interface OntologyIrUrlTarget_newObject {
	type: "newObject";
	newObject: OntologyIrNewObjectUrlTarget;
}
export interface OntologyIrUrlTarget_carbonWorkspace {
	type: "carbonWorkspace";
	carbonWorkspace: OntologyIrCarbonWorkspaceUrlTarget;
}
/**
* The target for generating a URL.
*/
export type OntologyIrUrlTarget = OntologyIrUrlTarget_logicRuleValue | OntologyIrUrlTarget_rid | OntologyIrUrlTarget_relativeUrlString | OntologyIrUrlTarget_newObject | OntologyIrUrlTarget_carbonWorkspace;
