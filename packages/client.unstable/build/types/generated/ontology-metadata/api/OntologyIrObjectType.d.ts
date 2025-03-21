import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "./ObjectTypeDisplayMetadata.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrObjectTypeInterfaceImplementation } from "./OntologyIrObjectTypeInterfaceImplementation.js";
import type { OntologyIrObjectTypeStatus } from "./OntologyIrObjectTypeStatus.js";
import type { OntologyIrPropertyType } from "./OntologyIrPropertyType.js";
/**
* An ObjectType is a model that represents a real world concept. For example, there could be
* an Employees ObjectType to represent the employees in a business organization.
*/
export interface OntologyIrObjectType {
	displayMetadata: ObjectTypeDisplayMetadata;
	primaryKeys: Array<ObjectTypeFieldApiName>;
	propertyTypes: Record<ObjectTypeFieldApiName, OntologyIrPropertyType>;
	titlePropertyTypeRid: ObjectTypeFieldApiName;
	apiName: ObjectTypeApiName | undefined;
	status: OntologyIrObjectTypeStatus;
	redacted: boolean | undefined;
	implementsInterfaces2: Array<OntologyIrObjectTypeInterfaceImplementation>;
	allImplementsInterfaces: Record<InterfaceTypeApiName, OntologyIrObjectTypeInterfaceImplementation>;
}
