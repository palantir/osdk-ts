import type { RuleSetBindingModification } from "../formatting/RuleSetBindingModification.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../SharedPropertyTypeRidOrIdInRequest.js";
import type { TypeClass } from "../TypeClass.js";
import type { InlineActionTypeModification } from "./InlineActionTypeModification.js";
import type { PropertyTypeStatusModification } from "./PropertyTypeStatusModification.js";
export interface PartialPropertyTypeModification {
	propertyTypeId: PropertyTypeId;
	sharedPropertyTypeId: SharedPropertyTypeRidOrIdInRequest;
	typeClasses: Array<TypeClass>;
	apiName: ObjectTypeFieldApiName | undefined;
	ruleSetBinding: RuleSetBindingModification | undefined;
	status: PropertyTypeStatusModification | undefined;
	inlineAction: InlineActionTypeModification | undefined;
}
