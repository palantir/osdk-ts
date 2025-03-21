import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { PropertyValue } from "./PropertyValue.js";
/**
* The primary key of an object or a link.
*/
export type EntityPrimaryKey = Record<PropertyTypeRid, PropertyValue>;
