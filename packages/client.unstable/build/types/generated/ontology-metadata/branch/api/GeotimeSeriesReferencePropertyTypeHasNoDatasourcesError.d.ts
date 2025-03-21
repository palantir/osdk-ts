import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when geotime series reference properties are not referenced by any datasources.
*/
export interface GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
}
