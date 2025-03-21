import type { ActionsObjectSetModification } from "./ActionsObjectSetModification.js";
/**
* Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
* for a ObjectSetRidParameter.
*/
export interface ObjectSetRidPrefillModification {
	objectSet: ActionsObjectSetModification;
}
