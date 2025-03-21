import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid.js";
import type { InterfacePropertyImplementation } from "./InterfacePropertyImplementation.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
/**
* An interface that an object type implements and metadata on how it implements it.
*/
export interface ObjectTypeInterfaceImplementation {
	interfaceTypeRid: InterfaceTypeRid;
	interfaceTypeApiName: InterfaceTypeApiName;
	properties: Record<SharedPropertyTypeRid, InterfacePropertyImplementation>;
	links: Record<InterfaceLinkTypeRid, Array<LinkTypeId>>;
}
