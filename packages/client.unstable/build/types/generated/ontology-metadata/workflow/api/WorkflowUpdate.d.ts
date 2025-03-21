import type { WorkflowModification } from "./WorkflowModification.js";
/**
* A type to represent the entities of a `Workflow` that is being updated.
*/
export interface WorkflowUpdate {
	workflow: WorkflowModification;
}
