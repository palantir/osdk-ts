import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { WorkflowObjectTypeTraitPropertyId } from "./WorkflowObjectTypeTraitPropertyId.js";
import type { WorkflowObjectTypeTraitReference } from "./WorkflowObjectTypeTraitReference.js";
/**
* A mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyRid` of the `ObjectType` it is to be associated with.
*/
export interface WorkflowObjectTypeTraitImpl {
	mapping: Record<WorkflowObjectTypeTraitPropertyId, PropertyTypeRid>;
	reference: WorkflowObjectTypeTraitReference;
}
