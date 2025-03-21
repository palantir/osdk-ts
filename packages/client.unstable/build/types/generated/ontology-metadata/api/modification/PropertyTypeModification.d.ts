import type { BaseFormatter } from "../BaseFormatter.js";
import type { RuleSetBindingModification } from "../formatting/RuleSetBindingModification.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { PropertyTypeDisplayMetadata } from "../PropertyTypeDisplayMetadata.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { TypeClass } from "../TypeClass.js";
import type { DataConstraintsModification } from "./DataConstraintsModification.js";
import type { InlineActionTypeModification } from "./InlineActionTypeModification.js";
import type { PropertyTypeStatusModification } from "./PropertyTypeStatusModification.js";
import type { TypeForModification } from "./TypeForModification.js";
import type { ValueTypeReferenceModification } from "./ValueTypeReferenceModification.js";
export interface PropertyTypeModification {
	displayMetadata: PropertyTypeDisplayMetadata;
	id: PropertyTypeId;
	ruleSetBinding: RuleSetBindingModification | undefined;
	baseFormatter: BaseFormatter | undefined;
	type: TypeForModification;
	typeClasses: Array<TypeClass>;
	indexedForSearch: boolean;
	apiName: ObjectTypeFieldApiName | undefined;
	status: PropertyTypeStatusModification | undefined;
	inlineAction: InlineActionTypeModification | undefined;
	dataConstraints: DataConstraintsModification | undefined;
	valueType: ValueTypeReferenceModification | undefined;
}
