import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { PropertyValue } from "./PropertyValue.js";
/**
* Represents an entry in a struct.
*/
export interface StructElement {
	structElementRid: PropertyTypeRid;
	structElementValue: PropertyValue;
}
