import type { PartialObjectTypeCreateRequest } from "./PartialObjectTypeCreateRequest.js";
import type { PartialObjectTypeDeleteRequest } from "./PartialObjectTypeDeleteRequest.js";
import type { PartialObjectTypeUpdateRequest } from "./PartialObjectTypeUpdateRequest.js";
export interface PartialObjectTypeModifyRequest_create {
	type: "create";
	create: PartialObjectTypeCreateRequest;
}
export interface PartialObjectTypeModifyRequest_update {
	type: "update";
	update: PartialObjectTypeUpdateRequest;
}
export interface PartialObjectTypeModifyRequest_delete {
	type: "delete";
	delete: PartialObjectTypeDeleteRequest;
}
export type PartialObjectTypeModifyRequest = PartialObjectTypeModifyRequest_create | PartialObjectTypeModifyRequest_update | PartialObjectTypeModifyRequest_delete;
