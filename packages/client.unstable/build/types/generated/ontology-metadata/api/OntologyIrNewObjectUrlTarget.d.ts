import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A URL target for a newly created object.
*/
export interface OntologyIrNewObjectUrlTarget {
	objectTypeId: ObjectTypeId;
	keys: Record<PropertyId, OntologyIrLogicRuleValue>;
}
