import type { ActionTypeError } from "./ActionTypeError.js";
import type { InterfaceTypeError } from "./InterfaceTypeError.js";
import type { LinkTypeError } from "./LinkTypeError.js";
import type { ObjectTypeError } from "./ObjectTypeError.js";
import type { RuleSetError } from "./RuleSetError.js";
import type { SharedPropertyTypeError } from "./SharedPropertyTypeError.js";
import type { TypeGroupError } from "./TypeGroupError.js";
import type { WorkflowError } from "./WorkflowError.js";
export interface OntologyMetadataValidationError_objectType {
	type: "objectType";
	objectType: ObjectTypeError;
}
export interface OntologyMetadataValidationError_linkType {
	type: "linkType";
	linkType: LinkTypeError;
}
export interface OntologyMetadataValidationError_ruleSet {
	type: "ruleSet";
	ruleSet: RuleSetError;
}
export interface OntologyMetadataValidationError_workflow {
	type: "workflow";
	workflow: WorkflowError;
}
export interface OntologyMetadataValidationError_actionType {
	type: "actionType";
	actionType: ActionTypeError;
}
export interface OntologyMetadataValidationError_sharedPropertyType {
	type: "sharedPropertyType";
	sharedPropertyType: SharedPropertyTypeError;
}
export interface OntologyMetadataValidationError_interfaceType {
	type: "interfaceType";
	interfaceType: InterfaceTypeError;
}
export interface OntologyMetadataValidationError_typeGroup {
	type: "typeGroup";
	typeGroup: TypeGroupError;
}
export type OntologyMetadataValidationError = OntologyMetadataValidationError_objectType | OntologyMetadataValidationError_linkType | OntologyMetadataValidationError_ruleSet | OntologyMetadataValidationError_workflow | OntologyMetadataValidationError_actionType | OntologyMetadataValidationError_sharedPropertyType | OntologyMetadataValidationError_interfaceType | OntologyMetadataValidationError_typeGroup;
