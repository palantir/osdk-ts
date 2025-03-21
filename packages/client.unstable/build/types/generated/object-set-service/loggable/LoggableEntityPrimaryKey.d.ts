import type { PropertyTypeRid } from "../api/PropertyTypeRid.js";
import type { LoggablePropertyValue } from "./LoggablePropertyValue.js";
/**
* See com.palantir.object.set.api.EntityPrimaryKey
*/
export type LoggableEntityPrimaryKey = Record<PropertyTypeRid, LoggablePropertyValue>;
