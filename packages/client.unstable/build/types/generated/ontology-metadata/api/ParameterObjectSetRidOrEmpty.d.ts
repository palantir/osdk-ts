import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectSetRid } from "./ParameterObjectSetRid.js";
export interface ParameterObjectSetRidOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectSetRidOrEmpty_objectSetRid {
	type: "objectSetRid";
	objectSetRid: ParameterObjectSetRid;
}
export type ParameterObjectSetRidOrEmpty = ParameterObjectSetRidOrEmpty_empty | ParameterObjectSetRidOrEmpty_objectSetRid;
