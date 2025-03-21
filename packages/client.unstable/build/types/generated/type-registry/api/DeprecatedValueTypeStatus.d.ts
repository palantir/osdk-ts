import type { ValueTypeRid } from "./ValueTypeRid.js";
/**
* This status indicates that the ValueType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface DeprecatedValueTypeStatus {
	message: string;
	deadline: string;
	replacedBy: ValueTypeRid | undefined;
}
