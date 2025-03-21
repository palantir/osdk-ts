import type { InterfaceTypeApiName } from "../InterfaceTypeApiName.js";
import type { InterfaceTypeDisplayMetadata } from "../InterfaceTypeDisplayMetadata.js";
import type { InterfaceTypeRidOrIdInRequest } from "../InterfaceTypeRidOrIdInRequest.js";
import type { InterfaceTypeStatus } from "../InterfaceTypeStatus.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../SharedPropertyTypeRidOrIdInRequest.js";
import type { InterfaceLinkTypeModification } from "./InterfaceLinkTypeModification.js";
import type { InterfaceSharedPropertyTypeModification } from "./InterfaceSharedPropertyTypeModification.js";
export interface InterfaceTypeModification {
	displayMetadata: InterfaceTypeDisplayMetadata;
	apiName: InterfaceTypeApiName;
	status: InterfaceTypeStatus;
	properties: Array<SharedPropertyTypeRidOrIdInRequest>;
	propertiesV2: Array<InterfaceSharedPropertyTypeModification>;
	extendsInterfaces: Array<InterfaceTypeRidOrIdInRequest>;
	links: Array<InterfaceLinkTypeModification>;
}
