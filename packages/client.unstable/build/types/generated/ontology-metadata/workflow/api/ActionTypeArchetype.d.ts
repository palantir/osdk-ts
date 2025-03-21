import type { ActionTypeArchetypeDescription } from "./ActionTypeArchetypeDescription.js";
import type { ActionTypeArchetypeDisplayName } from "./ActionTypeArchetypeDisplayName.js";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.js";
import type { ActionTypeParameterArchetype } from "./ActionTypeParameterArchetype.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";
/**
* This is used in `WorkflowArchetype` to represent an identifier to which an `ActionType` will be associated to in a `Workflow` definition.
*/
export interface ActionTypeArchetype {
	id: ActionTypeArchetypeId;
	displayName: ActionTypeArchetypeDisplayName;
	description: ActionTypeArchetypeDescription;
	parameters: Record<ActionTypeParameterArchetypeId, ActionTypeParameterArchetype>;
	required: boolean;
}
