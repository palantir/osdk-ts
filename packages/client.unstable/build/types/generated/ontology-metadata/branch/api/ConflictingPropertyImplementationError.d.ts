import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
/**
* An interface property is fulfilled more than once for an interface and the multiple implementations are not
* the same. When an interface and its super interface are both explicitly implemented by an object type, the
* implementation for an inherited property on the interface must be the same as the implementation of the
* property for the super interface. Additionally, the implementation of two child interfaces of the same super
* interface must have the same implementation for any inherited properties.
*/
export interface ConflictingPropertyImplementationError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	implementedInterfaceTypeRidsOrIdInRequests: Array<InterfaceTypeRidOrIdInRequest>;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	propertyTypeIds: Array<PropertyTypeId>;
}
