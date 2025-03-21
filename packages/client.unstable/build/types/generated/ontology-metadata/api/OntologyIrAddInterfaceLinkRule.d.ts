import type { InterfaceLinkTypeApiName } from "./InterfaceLinkTypeApiName.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ParameterId } from "./ParameterId.js";
export interface OntologyIrAddInterfaceLinkRule {
	interfaceTypeRid: InterfaceTypeApiName;
	interfaceLinkTypeRid: InterfaceLinkTypeApiName;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
