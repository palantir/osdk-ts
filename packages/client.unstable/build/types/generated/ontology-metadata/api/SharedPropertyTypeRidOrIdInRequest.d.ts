import type { SharedPropertyTypeIdInRequest } from "./SharedPropertyTypeIdInRequest.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface SharedPropertyTypeRidOrIdInRequest_rid {
	type: "rid";
	rid: SharedPropertyTypeRid;
}
export interface SharedPropertyTypeRidOrIdInRequest_idInRequest {
	type: "idInRequest";
	idInRequest: SharedPropertyTypeIdInRequest;
}
export type SharedPropertyTypeRidOrIdInRequest = SharedPropertyTypeRidOrIdInRequest_rid | SharedPropertyTypeRidOrIdInRequest_idInRequest;
