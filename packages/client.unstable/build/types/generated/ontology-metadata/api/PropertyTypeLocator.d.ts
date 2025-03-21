import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* An locator of a PropertyType including the ObjectTypeRid it belongs to.
*/
export interface PropertyTypeLocator {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
}
