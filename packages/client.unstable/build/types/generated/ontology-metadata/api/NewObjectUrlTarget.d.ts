import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A URL target for a newly created object.
*/
export interface NewObjectUrlTarget {
	objectTypeId: ObjectTypeId;
	keys: Record<PropertyId, LogicRuleValue>;
}
