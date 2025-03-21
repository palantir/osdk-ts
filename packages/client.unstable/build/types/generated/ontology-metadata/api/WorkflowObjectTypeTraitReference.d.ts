import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";
/**
* A type to uniquely identify a specific version of a `WorkflowObjectTypeTrait` in an `ObjectTypeArchetype` definition.
*/
export interface WorkflowObjectTypeTraitReference {
	traitId: WorkflowObjectTypeTraitId;
	version: WorkflowObjectTypeTraitVersion;
}
