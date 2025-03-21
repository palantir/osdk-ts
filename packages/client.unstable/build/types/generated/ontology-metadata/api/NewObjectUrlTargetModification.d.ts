import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A URL target for a newly created object.
*/
export interface NewObjectUrlTargetModification {
	objectTypeId: ObjectTypeId;
	keys: Record<PropertyId, LogicRuleValueModification>;
}
