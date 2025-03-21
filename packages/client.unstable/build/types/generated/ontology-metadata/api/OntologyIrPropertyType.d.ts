import type { BaseFormatter } from "./BaseFormatter.js";
import type { DataConstraints } from "./DataConstraints.js";
import type { InlineActionType } from "./InlineActionType.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertyTypeStatus } from "./OntologyIrPropertyTypeStatus.js";
import type { OntologyIrRuleSetBinding } from "./OntologyIrRuleSetBinding.js";
import type { OntologyIrType } from "./OntologyIrType.js";
import type { PropertyTypeDisplayMetadata } from "./PropertyTypeDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
import type { ValueTypeApiNameReference } from "./ValueTypeApiNameReference.js";
/**
* A PropertyType is a typed attribute of an ObjectType.
*/
export interface OntologyIrPropertyType {
	apiName: ObjectTypeFieldApiName | undefined;
	sharedPropertyTypeApiName: ObjectTypeFieldApiName | undefined;
	displayMetadata: PropertyTypeDisplayMetadata;
	indexedForSearch: boolean;
	ruleSetBinding: OntologyIrRuleSetBinding | undefined;
	baseFormatter: BaseFormatter | undefined;
	type: OntologyIrType;
	typeClasses: Array<TypeClass>;
	status: OntologyIrPropertyTypeStatus;
	inlineAction: InlineActionType | undefined;
	dataConstraints: DataConstraints | undefined;
	sharedPropertyTypeRid: ObjectTypeFieldApiName | undefined;
	valueType: ValueTypeApiNameReference | undefined;
}
