import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface OntologyIrModifyInterfaceRule {
	interfaceObjectToModify: ParameterId;
	sharedPropertyValues: Record<ObjectTypeFieldApiName, OntologyIrLogicRuleValue>;
	structFieldValues: Record<ObjectTypeFieldApiName, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
