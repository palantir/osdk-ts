import type { InterfaceLinkType } from "./InterfaceLinkType.js";
import type { InterfaceSharedPropertyType } from "./InterfaceSharedPropertyType.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { InterfaceTypeDisplayMetadata } from "./InterfaceTypeDisplayMetadata.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { InterfaceTypeStatus } from "./InterfaceTypeStatus.js";
import type { SharedPropertyType } from "./SharedPropertyType.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
/**
* Represents a collection of properties that object types can implement. If an object type implements an
* interface, it is guaranteed to have the conform to the interface shape.
*/
export interface InterfaceType {
	rid: InterfaceTypeRid;
	apiName: InterfaceTypeApiName;
	displayMetadata: InterfaceTypeDisplayMetadata;
	status: InterfaceTypeStatus;
	properties: Array<SharedPropertyType>;
	allProperties: Array<SharedPropertyType>;
	propertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
	allPropertiesV2: Record<SharedPropertyTypeRid, InterfaceSharedPropertyType>;
	extendsInterfaces: Array<InterfaceTypeRid>;
	allExtendsInterfaces: Array<InterfaceTypeRid>;
	links: Array<InterfaceLinkType>;
	allLinks: Array<InterfaceLinkType>;
}
