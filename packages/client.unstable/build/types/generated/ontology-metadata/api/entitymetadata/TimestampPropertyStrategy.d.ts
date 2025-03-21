import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* For this strategy, the datasource value should be used when the time in the given timestamp property is
* more recent than the time the patch is applied.
*/
export interface TimestampPropertyStrategy {
	timestampPropertyRid: PropertyTypeRid;
}
