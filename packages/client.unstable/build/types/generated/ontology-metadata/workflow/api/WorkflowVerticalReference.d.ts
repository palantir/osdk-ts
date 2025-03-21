import type { WorkflowVerticalIdentifierV2 } from "./WorkflowVerticalIdentifierV2.js";
export interface WorkflowVerticalReference_verticalIdentifier {
	type: "verticalIdentifier";
	verticalIdentifier: WorkflowVerticalIdentifierV2;
}
/**
* A type to uniquely identify a Vertical instance with which a Workflow is associated.
*/
export type WorkflowVerticalReference = WorkflowVerticalReference_verticalIdentifier;
