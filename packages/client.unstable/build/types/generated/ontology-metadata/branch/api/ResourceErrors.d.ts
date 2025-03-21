import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { ValidationError } from "./ValidationError.js";
/**
* A collection of maps where each key is a resource identifier and the corresponding value is a set
* of validation errors specific to that resource. This allows for errors to be tracked
* on a per-resource basis.
*/
export interface ResourceErrors {
	objectTypes: Record<ObjectTypeRid, Array<ValidationError>>;
	actionTypes: Record<ActionTypeRid, Array<ValidationError>>;
	linkTypes: Record<LinkTypeRid, Array<ValidationError>>;
	ruleSets: Record<RuleSetRid, Array<ValidationError>>;
	workflows: Record<WorkflowRid, Array<ValidationError>>;
	sharedPropertyTypes: Record<SharedPropertyTypeRid, Array<ValidationError>>;
	typeGroups: Record<TypeGroupRid, Array<ValidationError>>;
	interfaces: Record<InterfaceTypeRid, Array<ValidationError>>;
}
