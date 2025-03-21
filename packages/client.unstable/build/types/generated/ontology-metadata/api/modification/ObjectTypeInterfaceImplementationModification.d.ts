import type { InterfaceTypeRidOrIdInRequest } from "../InterfaceTypeRidOrIdInRequest.js";
import type { InterfaceLinkTypeImplementationModification } from "./InterfaceLinkTypeImplementationModification.js";
import type { InterfacePropertyImplementationModification } from "./InterfacePropertyImplementationModification.js";
export interface ObjectTypeInterfaceImplementationModification {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	links: Array<InterfaceLinkTypeImplementationModification>;
	properties: Array<InterfacePropertyImplementationModification>;
}
