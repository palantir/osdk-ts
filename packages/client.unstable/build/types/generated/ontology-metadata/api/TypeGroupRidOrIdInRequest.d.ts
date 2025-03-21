import type { TypeGroupIdInRequest } from "./TypeGroupIdInRequest.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
export interface TypeGroupRidOrIdInRequest_rid {
	type: "rid";
	rid: TypeGroupRid;
}
export interface TypeGroupRidOrIdInRequest_idInRequest {
	type: "idInRequest";
	idInRequest: TypeGroupIdInRequest;
}
export type TypeGroupRidOrIdInRequest = TypeGroupRidOrIdInRequest_rid | TypeGroupRidOrIdInRequest_idInRequest;
