import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ParameterId } from "./ParameterId.js";
export interface AddInterfaceLinkRule {
	interfaceTypeRid: InterfaceTypeRid;
	interfaceLinkTypeRid: InterfaceLinkTypeRid;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
