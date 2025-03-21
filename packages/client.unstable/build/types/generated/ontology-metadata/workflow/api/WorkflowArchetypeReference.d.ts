import type { WorkflowArchetypeId } from "./WorkflowArchetypeId.js";
import type { WorkflowArchetypeVersion } from "./WorkflowArchetypeVersion.js";
/**
* A type to uniquely identify a specific version of a `WorkflowArchetype` in a `Workflow` definition.
*/
export interface WorkflowArchetypeReference {
	workflowArchetypeId: WorkflowArchetypeId;
	workflowArchetypeVersion: WorkflowArchetypeVersion;
}
