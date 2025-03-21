import type { LinkTypeCreate } from "./LinkTypeCreate.js";
import type { LinkTypeDelete } from "./LinkTypeDelete.js";
import type { LinkTypeUpdate } from "./LinkTypeUpdate.js";
export interface LinkTypeModifyRequest_create {
	type: "create";
	create: LinkTypeCreate;
}
export interface LinkTypeModifyRequest_update {
	type: "update";
	update: LinkTypeUpdate;
}
export interface LinkTypeModifyRequest_delete {
	type: "delete";
	delete: LinkTypeDelete;
}
export type LinkTypeModifyRequest = LinkTypeModifyRequest_create | LinkTypeModifyRequest_update | LinkTypeModifyRequest_delete;
