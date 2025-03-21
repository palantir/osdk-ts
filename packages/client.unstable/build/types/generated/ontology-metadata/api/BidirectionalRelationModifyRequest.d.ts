import type { BidirectionalRelationCreateRequest } from "./BidirectionalRelationCreateRequest.js";
import type { BidirectionalRelationDeleteRequest } from "./BidirectionalRelationDeleteRequest.js";
import type { BidirectionalRelationUpdateRequest } from "./BidirectionalRelationUpdateRequest.js";
export interface BidirectionalRelationModifyRequest_create {
	type: "create";
	create: BidirectionalRelationCreateRequest;
}
export interface BidirectionalRelationModifyRequest_update {
	type: "update";
	update: BidirectionalRelationUpdateRequest;
}
export interface BidirectionalRelationModifyRequest_delete {
	type: "delete";
	delete: BidirectionalRelationDeleteRequest;
}
export type BidirectionalRelationModifyRequest = BidirectionalRelationModifyRequest_create | BidirectionalRelationModifyRequest_update | BidirectionalRelationModifyRequest_delete;
