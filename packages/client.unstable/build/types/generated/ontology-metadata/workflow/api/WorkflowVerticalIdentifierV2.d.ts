import type { WorkflowVerticalId } from "./WorkflowVerticalId.js";
import type { WorkflowVerticalTemplateReference } from "./WorkflowVerticalTemplateReference.js";
/**
* A combination of `WorkflowVerticalId` and `WorkflowVerticalType` to uniquely identify a Vertical instance with which a `Workflow` is associated.
*/
export interface WorkflowVerticalIdentifierV2 {
	verticalId: WorkflowVerticalId;
	verticalTemplateReference: WorkflowVerticalTemplateReference;
	useCaseTemplateId: string;
}
