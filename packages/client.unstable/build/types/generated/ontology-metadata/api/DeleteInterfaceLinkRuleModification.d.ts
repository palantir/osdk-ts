import type { InterfaceLinkTypeRidOrIdInRequest } from "./InterfaceLinkTypeRidOrIdInRequest.js";
import type { InterfaceTypeRidOrIdInRequest } from "./InterfaceTypeRidOrIdInRequest.js";
import type { ParameterId } from "./ParameterId.js";
export interface DeleteInterfaceLinkRuleModification {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	interfaceLinkTypeRidOrIdInRequest: InterfaceLinkTypeRidOrIdInRequest;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
