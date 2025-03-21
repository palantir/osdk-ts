import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* An Inline ActionType must be referenced by one and only one ObjectType.
*/
export interface InlineActionTypeCannotBeReferencedByMultipleObjectTypesError {
	actionTypeRid: ActionTypeIdentifier;
	objectTypesWhichReferenceThisActionTypeAsInline: Array<ObjectTypeId>;
}
