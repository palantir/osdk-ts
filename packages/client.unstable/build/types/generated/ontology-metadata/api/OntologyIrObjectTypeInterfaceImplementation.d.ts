import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrInterfacePropertyImplementation } from "./OntologyIrInterfacePropertyImplementation.js";
/**
* An interface that an object type implements and metadata on how it implements it.
*/
export interface OntologyIrObjectTypeInterfaceImplementation {
	interfaceTypeApiName: InterfaceTypeApiName;
	properties: Record<ObjectTypeFieldApiName, OntologyIrInterfacePropertyImplementation>;
}
