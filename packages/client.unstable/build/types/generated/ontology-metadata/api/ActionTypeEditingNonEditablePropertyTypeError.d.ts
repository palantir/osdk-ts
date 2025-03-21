import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* The ActionType definition tries to edit a property type that is not editable.
*/
export interface ActionTypeEditingNonEditablePropertyTypeError {
	actionTypeIdentifier: ActionTypeIdentifier;
	objectTypeIdInActionLogicRule: ObjectTypeId;
	nonEditablePropertyTypes: Array<PropertyTypeId>;
}
