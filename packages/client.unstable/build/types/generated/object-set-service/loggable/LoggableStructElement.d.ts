import type { PropertyTypeRid } from "../api/PropertyTypeRid.js";
import type { LoggablePropertyValue } from "./LoggablePropertyValue.js";
/**
* See com.palantir.object.set.api.StructElement
*/
export interface LoggableStructElement {
	structElementRid: PropertyTypeRid;
	structElementValue: LoggablePropertyValue;
}
