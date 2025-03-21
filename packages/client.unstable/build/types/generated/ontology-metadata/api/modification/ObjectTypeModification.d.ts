import type { InterfaceTypeRidOrIdInRequest } from "../InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "../ObjectTypeDisplayMetadata.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeStatus } from "../ObjectTypeStatus.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { TypeGroupRidOrIdInRequest } from "../TypeGroupRidOrIdInRequest.js";
import type { ObjectTypeInterfaceImplementationModification } from "./ObjectTypeInterfaceImplementationModification.js";
import type { ObjectTypeTraitsModification } from "./ObjectTypeTraitsModification.js";
import type { PartialPropertyTypeModification } from "./PartialPropertyTypeModification.js";
import type { PropertyTypeModification } from "./PropertyTypeModification.js";
export interface ObjectTypeModification {
	displayMetadata: ObjectTypeDisplayMetadata;
	id: ObjectTypeId;
	primaryKeys: Array<PropertyTypeId>;
	propertyTypes: Record<PropertyTypeId, PropertyTypeModification>;
	sharedPropertyTypes: Record<PropertyTypeId, PartialPropertyTypeModification>;
	titlePropertyTypeId: PropertyTypeId;
	traits: ObjectTypeTraitsModification;
	apiName: ObjectTypeApiName | undefined;
	status: ObjectTypeStatus | undefined;
	implementsInterfaces: Array<InterfaceTypeRidOrIdInRequest>;
	implementsInterfaces2: Array<ObjectTypeInterfaceImplementationModification>;
	typeGroups: Array<TypeGroupRidOrIdInRequest>;
}
