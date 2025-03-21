import type { InterfaceTypeIdInRequest } from "./InterfaceTypeIdInRequest.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
export interface InterfaceTypeRidOrIdInRequest_rid {
	type: "rid";
	rid: InterfaceTypeRid;
}
export interface InterfaceTypeRidOrIdInRequest_idInRequest {
	type: "idInRequest";
	idInRequest: InterfaceTypeIdInRequest;
}
export type InterfaceTypeRidOrIdInRequest = InterfaceTypeRidOrIdInRequest_rid | InterfaceTypeRidOrIdInRequest_idInRequest;
