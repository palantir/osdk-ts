import type { ActionTypeBinding } from "./ActionTypeBinding.js";
import type { FunctionBinding } from "./FunctionBinding.js";
import type { InterfaceTypeBinding } from "./InterfaceTypeBinding.js";
import type { LinkTypeBinding } from "./LinkTypeBinding.js";
import type { ObjectTypeBinding } from "./ObjectTypeBinding.js";
/**
* Contains bindings for each resource included in an SDK.
*
* Each binding contains a resource's API name, as it was on the stack the
* SDK originated from, along with the RID of the equivalent resource on the
* current, local stack.
*/
export interface ResourceBindings {
	interfaceTypes: Array<InterfaceTypeBinding>;
	objectTypes: Array<ObjectTypeBinding>;
	linkTypes: Array<LinkTypeBinding>;
	actionTypes: Array<ActionTypeBinding>;
	functions: Array<FunctionBinding>;
}
