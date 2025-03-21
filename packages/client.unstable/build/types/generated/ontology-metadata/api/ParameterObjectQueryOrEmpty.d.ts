import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectQuery } from "./ParameterObjectQuery.js";
export interface ParameterObjectQueryOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectQueryOrEmpty_objectQuery {
	type: "objectQuery";
	objectQuery: ParameterObjectQuery;
}
/**
* Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
*/
export type ParameterObjectQueryOrEmpty = ParameterObjectQueryOrEmpty_empty | ParameterObjectQueryOrEmpty_objectQuery;
