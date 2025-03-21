import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when a time dependent property is not referenced by any datasources.
*/
export interface TimeDependentPropertyTypeHasNoDatasourcesError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
}
