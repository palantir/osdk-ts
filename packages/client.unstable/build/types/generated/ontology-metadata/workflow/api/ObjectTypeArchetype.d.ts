import type { WorkflowObjectTypeTraitReference } from "../../api/WorkflowObjectTypeTraitReference.js";
import type { ObjectTypeArchetypeDescription } from "./ObjectTypeArchetypeDescription.js";
import type { ObjectTypeArchetypeDisplayName } from "./ObjectTypeArchetypeDisplayName.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";
/**
* This is used in `WorkflowArchetype` to represent an identifier to which an `ObjectType` will be associated to in a `Workflow` definition.
*/
export interface ObjectTypeArchetype {
	id: ObjectTypeArchetypeId;
	displayName: ObjectTypeArchetypeDisplayName;
	description: ObjectTypeArchetypeDescription;
	objectTypeTraitReference: WorkflowObjectTypeTraitReference | undefined;
	required: boolean;
}
