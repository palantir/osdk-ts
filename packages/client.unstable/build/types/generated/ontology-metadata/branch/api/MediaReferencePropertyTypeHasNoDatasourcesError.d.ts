import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when a media reference property is not referenced by any media datasources.
*/
export interface MediaReferencePropertyTypeHasNoDatasourcesError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
}
