import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface PermissionsOntologyEntity_objectType {
	type: "objectType";
	objectType: ObjectTypeRid;
}
export interface PermissionsOntologyEntity_linkType {
	type: "linkType";
	linkType: LinkTypeRid;
}
export interface PermissionsOntologyEntity_actionType {
	type: "actionType";
	actionType: ActionTypeRid;
}
export interface PermissionsOntologyEntity_workflow {
	type: "workflow";
	workflow: WorkflowRid;
}
export interface PermissionsOntologyEntity_sharedPropertyType {
	type: "sharedPropertyType";
	sharedPropertyType: SharedPropertyTypeRid;
}
export interface PermissionsOntologyEntity_interfaceType {
	type: "interfaceType";
	interfaceType: InterfaceTypeRid;
}
export interface PermissionsOntologyEntity_typeGroup {
	type: "typeGroup";
	typeGroup: TypeGroupRid;
}
/**
* The ontology entity to apply role grants to.
*/
export type PermissionsOntologyEntity = PermissionsOntologyEntity_objectType | PermissionsOntologyEntity_linkType | PermissionsOntologyEntity_actionType | PermissionsOntologyEntity_workflow | PermissionsOntologyEntity_sharedPropertyType | PermissionsOntologyEntity_interfaceType | PermissionsOntologyEntity_typeGroup;
