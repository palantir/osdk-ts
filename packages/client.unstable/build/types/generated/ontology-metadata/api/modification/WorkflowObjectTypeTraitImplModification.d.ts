import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { WorkflowObjectTypeTraitPropertyId } from "../WorkflowObjectTypeTraitPropertyId.js";
import type { WorkflowObjectTypeTraitReference } from "../WorkflowObjectTypeTraitReference.js";
/**
* This represents the associated `WorkflowObjectTypeTrait` along with the mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyId` of the `ObjectType` it is to be associated with.
*/
export interface WorkflowObjectTypeTraitImplModification {
	mapping: Record<WorkflowObjectTypeTraitPropertyId, PropertyTypeId>;
	reference: WorkflowObjectTypeTraitReference;
}
