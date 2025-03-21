import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface DataEntities_objectTypeRids {
	type: "objectTypeRids";
	objectTypeRids: Array<ObjectTypeRid>;
}
export interface DataEntities_actionTypeRids {
	type: "actionTypeRids";
	actionTypeRids: Array<ActionTypeRid>;
}
export interface DataEntities_functionRids {
	type: "functionRids";
	functionRids: Array<FunctionRid>;
}
/**
* A union to represent a set of homogeneous entities, each referenced by their rid.
*/
export type DataEntities = DataEntities_objectTypeRids | DataEntities_actionTypeRids | DataEntities_functionRids;
