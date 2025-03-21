import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { PropertyValue } from "./PropertyValue.js";
/**
* The primary key of an object.
*/
export type ObjectPrimaryKeyV2 = Record<PropertyTypeRid, PropertyValue>;
