import type { ActiveValueTypeStatus } from "./ActiveValueTypeStatus.js";
import type { DeprecatedValueTypeStatus } from "./DeprecatedValueTypeStatus.js";
export interface ValueTypeStatus_active {
	type: "active";
	active: ActiveValueTypeStatus;
}
export interface ValueTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedValueTypeStatus;
}
/**
* The status to indicate whether the Value Type is either Experimental, Active or Deprecated.
*/
export type ValueTypeStatus = ValueTypeStatus_active | ValueTypeStatus_deprecated;
