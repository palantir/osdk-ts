import type { InterfaceLinkTypeIdInRequest } from "./InterfaceLinkTypeIdInRequest.js";
import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid.js";
export interface InterfaceLinkTypeRidOrIdInRequest_rid {
	type: "rid";
	rid: InterfaceLinkTypeRid;
}
export interface InterfaceLinkTypeRidOrIdInRequest_idInRequest {
	type: "idInRequest";
	idInRequest: InterfaceLinkTypeIdInRequest;
}
export type InterfaceLinkTypeRidOrIdInRequest = InterfaceLinkTypeRidOrIdInRequest_rid | InterfaceLinkTypeRidOrIdInRequest_idInRequest;
