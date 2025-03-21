import type { ObjectTypeTraitPropertySpecification } from "./ObjectTypeTraitPropertySpecification.js";
import type { WorkflowObjectTypeTraitPropertyDescription } from "./WorkflowObjectTypeTraitPropertyDescription.js";
import type { WorkflowObjectTypeTraitPropertyDisplayName } from "./WorkflowObjectTypeTraitPropertyDisplayName.js";
import type { WorkflowObjectTypeTraitPropertyId } from "./WorkflowObjectTypeTraitPropertyId.js";
/**
* Represents a property of a `WorkflowObjectTypeTrait`. For example, an Alert WorkflowObjectTypeTrait may have a required 'Assignee' WorkflowObjectTypeTraitProperty. All ObjectType(s) derived from the Alert WorkflowObjectTypeTrait must provide provide a property that conforms to the corresponding ObjectTypeTraitPropertySpecification
*/
export interface WorkflowObjectTypeTraitProperty {
	displayName: WorkflowObjectTypeTraitPropertyDisplayName;
	id: WorkflowObjectTypeTraitPropertyId;
	specification: ObjectTypeTraitPropertySpecification;
	description: WorkflowObjectTypeTraitPropertyDescription;
}
