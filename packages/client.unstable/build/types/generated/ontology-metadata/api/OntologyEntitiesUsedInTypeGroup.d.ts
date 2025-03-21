import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* A collection of all the entities that use a TypeGroup.
*/
export interface OntologyEntitiesUsedInTypeGroup {
	objectTypeRids: Array<ObjectTypeRid>;
	actionTypeRids: Array<ActionTypeRid>;
}
