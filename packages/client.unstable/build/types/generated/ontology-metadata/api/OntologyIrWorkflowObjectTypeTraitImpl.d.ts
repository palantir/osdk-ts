import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { WorkflowObjectTypeTraitPropertyId } from "./WorkflowObjectTypeTraitPropertyId.js";
import type { WorkflowObjectTypeTraitReference } from "./WorkflowObjectTypeTraitReference.js";
/**
* A mapping between the `WorkflowObjectTypeTraitPropertyId` of the `WorkflowObjectTypeTrait` to the `PropertyRid` of the `ObjectType` it is to be associated with.
*/
export interface OntologyIrWorkflowObjectTypeTraitImpl {
	mapping: Record<WorkflowObjectTypeTraitPropertyId, ObjectTypeFieldApiName>;
	reference: WorkflowObjectTypeTraitReference;
}
