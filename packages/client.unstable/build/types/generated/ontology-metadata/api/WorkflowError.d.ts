import type { DeletedLinkTypesStillInUseInWorkflowError } from "./DeletedLinkTypesStillInUseInWorkflowError.js";
import type { DeletedObjectTypesStillInUseInWorkflowError } from "./DeletedObjectTypesStillInUseInWorkflowError.js";
import type { ReferencedLinkTypesInWorkflowNotFoundError } from "./ReferencedLinkTypesInWorkflowNotFoundError.js";
import type { ReferencedObjectTypesInWorkflowNotFoundError } from "./ReferencedObjectTypesInWorkflowNotFoundError.js";
import type { WorkflowsAlreadyExistError } from "./WorkflowsAlreadyExistError.js";
import type { WorkflowsNotFoundError } from "./WorkflowsNotFoundError.js";
export interface WorkflowError_workflowsNotFound {
	type: "workflowsNotFound";
	workflowsNotFound: WorkflowsNotFoundError;
}
export interface WorkflowError_workflowsAlreadyExist {
	type: "workflowsAlreadyExist";
	workflowsAlreadyExist: WorkflowsAlreadyExistError;
}
export interface WorkflowError_referencedObjectTypesInWorkflowNotFound {
	type: "referencedObjectTypesInWorkflowNotFound";
	referencedObjectTypesInWorkflowNotFound: ReferencedObjectTypesInWorkflowNotFoundError;
}
export interface WorkflowError_referencedLinkTypesInWorkflowNotFound {
	type: "referencedLinkTypesInWorkflowNotFound";
	referencedLinkTypesInWorkflowNotFound: ReferencedLinkTypesInWorkflowNotFoundError;
}
export interface WorkflowError_deletedObjectTypesStillInUseInWorkflow {
	type: "deletedObjectTypesStillInUseInWorkflow";
	deletedObjectTypesStillInUseInWorkflow: DeletedObjectTypesStillInUseInWorkflowError;
}
export interface WorkflowError_deletedLinkTypesStillInUseInWorkflow {
	type: "deletedLinkTypesStillInUseInWorkflow";
	deletedLinkTypesStillInUseInWorkflow: DeletedLinkTypesStillInUseInWorkflowError;
}
export type WorkflowError = WorkflowError_workflowsNotFound | WorkflowError_workflowsAlreadyExist | WorkflowError_referencedObjectTypesInWorkflowNotFound | WorkflowError_referencedLinkTypesInWorkflowNotFound | WorkflowError_deletedObjectTypesStillInUseInWorkflow | WorkflowError_deletedLinkTypesStillInUseInWorkflow;
