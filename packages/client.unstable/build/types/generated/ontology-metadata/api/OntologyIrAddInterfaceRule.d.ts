import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface OntologyIrAddInterfaceRule {
	interfaceTypeRid: InterfaceTypeApiName;
	objectType: ParameterId;
	sharedPropertyValues: Record<ObjectTypeFieldApiName, OntologyIrLogicRuleValue>;
	structFieldValues: Record<ObjectTypeFieldApiName, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
