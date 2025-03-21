import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* An identifier of a PropertyType including the ObjectTypeRid it belongs to.
*/
export interface PropertyTypeIdentifier {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
}
