import type { OntologyIrActionsObjectSet } from "./OntologyIrActionsObjectSet.js";
/**
* Generates an ObjectSetRid, from the provided ObjectSet definition, that would be used as the default value
* for a ObjectSetRidParameter.
*/
export interface OntologyIrObjectSetRidPrefill {
	objectSet: OntologyIrActionsObjectSet;
}
