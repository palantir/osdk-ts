import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
/**
* Expected local property implementing interface property to have the same value for indexed for search, but it
* did not.
*/
export interface InvalidIsIndexedForSearchError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeRid: PropertyTypeRid;
	propertyTypeId: PropertyTypeId | undefined;
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	interfacePropertyIsIndexedForSearch: boolean;
	objectPropertyIsIndexForSearch: boolean;
}
