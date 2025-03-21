import type { InterfaceTypeRidOrIdInRequest } from "./InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
export interface LinkedEntityTypeRidOrIdInRequest_objectType {
	type: "objectType";
	objectType: ObjectTypeId;
}
export interface LinkedEntityTypeRidOrIdInRequest_interfaceType {
	type: "interfaceType";
	interfaceType: InterfaceTypeRidOrIdInRequest;
}
export type LinkedEntityTypeRidOrIdInRequest = LinkedEntityTypeRidOrIdInRequest_objectType | LinkedEntityTypeRidOrIdInRequest_interfaceType;
