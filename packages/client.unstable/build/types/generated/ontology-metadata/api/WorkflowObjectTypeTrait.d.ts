import type { WorkflowObjectTypeTraitDescription } from "./WorkflowObjectTypeTraitDescription.js";
import type { WorkflowObjectTypeTraitDisplayName } from "./WorkflowObjectTypeTraitDisplayName.js";
import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitProperty } from "./WorkflowObjectTypeTraitProperty.js";
import type { WorkflowObjectTypeTraitPropertyId } from "./WorkflowObjectTypeTraitPropertyId.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";
/**
* A `WorkflowObjectTypeTrait` is a model that represents a template for an ObjectType(s). For example, there could
* be an Alert WorkflowObjectTypeTrait and multiple alert ObjectType(s) can adhere to it.
*/
export interface WorkflowObjectTypeTrait {
	displayName: WorkflowObjectTypeTraitDisplayName;
	id: WorkflowObjectTypeTraitId;
	description: WorkflowObjectTypeTraitDescription | undefined;
	version: WorkflowObjectTypeTraitVersion;
	properties: Record<WorkflowObjectTypeTraitPropertyId, WorkflowObjectTypeTraitProperty>;
}
