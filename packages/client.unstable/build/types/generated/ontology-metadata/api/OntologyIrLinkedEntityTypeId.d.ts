import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
export interface OntologyIrLinkedEntityTypeId_objectType {
	type: "objectType";
	objectType: ObjectTypeId;
}
export interface OntologyIrLinkedEntityTypeId_interfaceType {
	type: "interfaceType";
	interfaceType: InterfaceTypeApiName;
}
/**
* A reference to a linked entity in InterfaceLinkTypes.
*/
export type OntologyIrLinkedEntityTypeId = OntologyIrLinkedEntityTypeId_objectType | OntologyIrLinkedEntityTypeId_interfaceType;
