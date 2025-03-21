import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* All property types in each object type must be mapped to a datasource or explicitly labeled as edit-only (if the object type backing datasource supports edit-only).
*/
export interface NotAllPropertyTypesAreMappedToDatasourceWithinObjectType {
	objectTypeRid: ObjectTypeRid;
	propertyTypesInObjectType: Array<PropertyTypeId>;
	propertyTypesInDatasource: Array<PropertyTypeId>;
}
