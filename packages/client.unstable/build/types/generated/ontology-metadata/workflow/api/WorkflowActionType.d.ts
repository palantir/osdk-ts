import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { ParameterRid } from "../../api/ParameterRid.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";
/**
* A `WorkflowActionType` is an instantiation of a `ActionTypeArchetypeDefinition`, providing a concrete `ActionTypeRid`.
* This represents a set of properties for referencing an ActionType in a `Workflow` definition.
*/
export interface WorkflowActionType {
	rid: ActionTypeRid;
	parameters: Record<ActionTypeParameterArchetypeId, ParameterRid>;
}
