import type { ActionsObjectSetModification } from "./ActionsObjectSetModification.js";
/**
* Computes the result of an ObjectSet and suggests the value(s) to the user for a parameter.
*/
export interface ObjectQueryPrefillModification {
	objectSet: ActionsObjectSetModification;
}
