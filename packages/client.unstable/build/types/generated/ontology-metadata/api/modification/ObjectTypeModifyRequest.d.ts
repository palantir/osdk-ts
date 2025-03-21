import type { ObjectTypeCreate } from "./ObjectTypeCreate.js";
import type { ObjectTypeDelete } from "./ObjectTypeDelete.js";
import type { ObjectTypeUpdate } from "./ObjectTypeUpdate.js";
export interface ObjectTypeModifyRequest_create {
	type: "create";
	create: ObjectTypeCreate;
}
export interface ObjectTypeModifyRequest_update {
	type: "update";
	update: ObjectTypeUpdate;
}
export interface ObjectTypeModifyRequest_delete {
	type: "delete";
	delete: ObjectTypeDelete;
}
export type ObjectTypeModifyRequest = ObjectTypeModifyRequest_create | ObjectTypeModifyRequest_update | ObjectTypeModifyRequest_delete;
