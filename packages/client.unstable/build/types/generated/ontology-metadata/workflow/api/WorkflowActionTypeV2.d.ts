import type { ActionTypeIdentifier } from "../../api/ActionTypeIdentifier.js";
import type { ActionTypeParameterIdentifier } from "../../api/ActionTypeParameterIdentifier.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";
/**
* A `WorkflowActionTypeV2` is an instantiation of a `ActionTypeArchetypeDefinition`, providing a concrete `ActionTypeIdentifier`.
* This represents a set of properties for referencing an ActionType in a `Workflow` definition.
*/
export interface WorkflowActionTypeV2 {
	identifier: ActionTypeIdentifier;
	parameters: Record<ActionTypeParameterArchetypeId, ActionTypeParameterIdentifier>;
}
