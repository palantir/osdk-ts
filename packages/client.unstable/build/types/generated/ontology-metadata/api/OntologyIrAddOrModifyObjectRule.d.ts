import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface OntologyIrAddOrModifyObjectRule {
	objectTypeId: ObjectTypeId;
	propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
	structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
