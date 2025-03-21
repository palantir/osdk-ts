import type { FunctionArchetypeDescription } from "./FunctionArchetypeDescription.js";
import type { FunctionArchetypeDisplayName } from "./FunctionArchetypeDisplayName.js";
import type { FunctionArchetypeId } from "./FunctionArchetypeId.js";
/**
* This is used in `WorkflowArchetype` to represent an identifier to which function will be associated to in a `Workflow` definition.
*/
export interface FunctionArchetype {
	id: FunctionArchetypeId;
	displayName: FunctionArchetypeDisplayName;
	description: FunctionArchetypeDescription;
	required: boolean;
}
