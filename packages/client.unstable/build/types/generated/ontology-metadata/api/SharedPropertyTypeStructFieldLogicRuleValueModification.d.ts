import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "./SharedPropertyTypeRidOrIdInRequest.js";
import type { StructFieldApiNameOrRid } from "./StructFieldApiNameOrRid.js";
import type { StructFieldLogicRuleValueModification } from "./StructFieldLogicRuleValueModification.js";
/**
* A StructFieldRid or StructFieldApiName, the SharedPropertyTypeRidOrIdInRequest of the struct property, and the
* associated StructFieldLogicRuleValueModification.
*/
export interface SharedPropertyTypeStructFieldLogicRuleValueModification {
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	structFieldApiName: ObjectTypeFieldApiName | undefined;
	structFieldApiNameOrRid: StructFieldApiNameOrRid | undefined;
	structFieldLogicRuleValueModification: StructFieldLogicRuleValueModification;
}
