import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface OntologyIrModifyObjectRule {
	objectToModify: ParameterId;
	propertyValues: Record<PropertyTypeId, OntologyIrLogicRuleValue>;
	structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
