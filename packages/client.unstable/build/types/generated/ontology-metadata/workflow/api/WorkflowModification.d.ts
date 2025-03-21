import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.js";
import type { FunctionArchetypeId } from "./FunctionArchetypeId.js";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";
import type { WorkflowActionType } from "./WorkflowActionType.js";
import type { WorkflowActionTypeV2 } from "./WorkflowActionTypeV2.js";
import type { WorkflowArchetypeReference } from "./WorkflowArchetypeReference.js";
import type { WorkflowDescription } from "./WorkflowDescription.js";
import type { WorkflowDisplayName } from "./WorkflowDisplayName.js";
import type { WorkflowFunction } from "./WorkflowFunction.js";
import type { WorkflowVerticalReference } from "./WorkflowVerticalReference.js";
/**
* A type to represent a `Workflow` in its create and update request. This holds all the properties that a `Workflow` has except `WorkflowRid`.
*/
export interface WorkflowModification {
	displayName: WorkflowDisplayName;
	description: WorkflowDescription;
	workflowArchetypeReference: WorkflowArchetypeReference;
	verticalReference: WorkflowVerticalReference | undefined;
	objectTypes: Record<ObjectTypeArchetypeId, ObjectTypeId>;
	linkTypes: Record<LinkTypeArchetypeId, LinkTypeId>;
	actionsTypes: Record<ActionTypeArchetypeId, WorkflowActionType>;
	actionsTypesV2: Record<ActionTypeArchetypeId, WorkflowActionTypeV2>;
	functions: Record<FunctionArchetypeId, WorkflowFunction>;
}
