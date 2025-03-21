import type { BaseParameterType } from "../../api/types/BaseParameterType.js";
import type { ActionTypeParameterArchetypeDescription } from "./ActionTypeParameterArchetypeDescription.js";
import type { ActionTypeParameterArchetypeDisplayName } from "./ActionTypeParameterArchetypeDisplayName.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";
/**
* This is used in `ActionTypeArchetype` to represent an identifier to which an `ActionTypeParameter` will be associated to in a `Workflow` definition.
*/
export interface ActionTypeParameterArchetype {
	id: ActionTypeParameterArchetypeId;
	displayName: ActionTypeParameterArchetypeDisplayName;
	description: ActionTypeParameterArchetypeDescription;
	required: boolean;
	type: BaseParameterType;
}
