import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { InterfaceTypeDisplayMetadata } from "./InterfaceTypeDisplayMetadata.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrInterfaceLinkType } from "./OntologyIrInterfaceLinkType.js";
import type { OntologyIrInterfaceSharedPropertyType } from "./OntologyIrInterfaceSharedPropertyType.js";
import type { OntologyIrInterfaceTypeStatus } from "./OntologyIrInterfaceTypeStatus.js";
import type { OntologyIrSharedPropertyType } from "./OntologyIrSharedPropertyType.js";
/**
* Represents a collection of properties that object types can implement. If an object type implements an
* interface, it is guaranteed to have the conform to the interface shape.
*/
export interface OntologyIrInterfaceType {
	apiName: InterfaceTypeApiName;
	displayMetadata: InterfaceTypeDisplayMetadata;
	status: OntologyIrInterfaceTypeStatus;
	properties: Array<OntologyIrSharedPropertyType>;
	allProperties: Array<OntologyIrSharedPropertyType>;
	propertiesV2: Record<ObjectTypeFieldApiName, OntologyIrInterfaceSharedPropertyType>;
	allPropertiesV2: Record<ObjectTypeFieldApiName, OntologyIrInterfaceSharedPropertyType>;
	extendsInterfaces: Array<InterfaceTypeApiName>;
	allExtendsInterfaces: Array<InterfaceTypeApiName>;
	links: Array<OntologyIrInterfaceLinkType>;
	allLinks: Array<OntologyIrInterfaceLinkType>;
}
