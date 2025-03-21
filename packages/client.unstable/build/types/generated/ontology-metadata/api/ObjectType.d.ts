import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "./ObjectTypeDisplayMetadata.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeInterfaceImplementation } from "./ObjectTypeInterfaceImplementation.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { ObjectTypeStatus } from "./ObjectTypeStatus.js";
import type { ObjectTypeTraits } from "./ObjectTypeTraits.js";
import type { PropertyType } from "./PropertyType.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* An ObjectType is a model that represents a real world concept. For example, there could be
* an Employees ObjectType to represent the employees in a business organization.
*/
export interface ObjectType {
	displayMetadata: ObjectTypeDisplayMetadata;
	id: ObjectTypeId;
	primaryKeys: Array<PropertyTypeRid>;
	propertyTypes: Record<PropertyTypeRid, PropertyType>;
	rid: ObjectTypeRid;
	titlePropertyTypeRid: PropertyTypeRid;
	traits: ObjectTypeTraits;
	apiName: ObjectTypeApiName | undefined;
	status: ObjectTypeStatus;
	redacted: boolean | undefined;
	implementsInterfaces: Array<InterfaceTypeRid>;
	implementsInterfaces2: Array<ObjectTypeInterfaceImplementation>;
	allImplementsInterfaces: Record<InterfaceTypeRid, ObjectTypeInterfaceImplementation>;
	typeGroups: Array<TypeGroupRid>;
}
