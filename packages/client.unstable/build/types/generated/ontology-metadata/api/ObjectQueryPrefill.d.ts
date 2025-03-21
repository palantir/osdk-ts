import type { ActionsObjectSet } from "./ActionsObjectSet.js";
/**
* Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
*/
export interface ObjectQueryPrefill {
	objectSet: ActionsObjectSet;
}
