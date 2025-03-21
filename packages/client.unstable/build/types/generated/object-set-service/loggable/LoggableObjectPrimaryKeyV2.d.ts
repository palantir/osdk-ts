import type { PropertyTypeRid } from "../api/PropertyTypeRid.js";
import type { LoggablePropertyValue } from "./LoggablePropertyValue.js";
/**
* See com.palantir.object.set.api.ObjectPrimaryKeyV2
*/
export type LoggableObjectPrimaryKeyV2 = Record<PropertyTypeRid, LoggablePropertyValue>;
