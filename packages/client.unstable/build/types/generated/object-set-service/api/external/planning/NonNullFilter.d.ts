import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
/**
* An object matches a NonNullFilter iff its value for the specified property is not null.
*/
export interface NonNullFilter {
	property: PropertyTypeRid;
}
