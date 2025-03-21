import type { InterfaceLinkTypeApiName } from "./InterfaceLinkTypeApiName.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ParameterId } from "./ParameterId.js";
export interface OntologyIrDeleteInterfaceLinkRule {
	interfaceTypeRid: InterfaceTypeApiName;
	interfaceLinkTypeRid: InterfaceLinkTypeApiName;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
