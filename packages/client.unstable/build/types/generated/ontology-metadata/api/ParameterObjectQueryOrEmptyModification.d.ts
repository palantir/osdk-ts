import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectQueryModification } from "./ParameterObjectQueryModification.js";
export interface ParameterObjectQueryOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectQueryOrEmptyModification_objectQuery {
	type: "objectQuery";
	objectQuery: ParameterObjectQueryModification;
}
/**
* Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
*/
export type ParameterObjectQueryOrEmptyModification = ParameterObjectQueryOrEmptyModification_empty | ParameterObjectQueryOrEmptyModification_objectQuery;
