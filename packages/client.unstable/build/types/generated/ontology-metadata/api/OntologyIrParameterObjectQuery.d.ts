import type { OntologyIrActionsObjectSet } from "./OntologyIrActionsObjectSet.js";
/**
* Only allows Objects that are in this Dynamic Object Set at Execution time.
*/
export interface OntologyIrParameterObjectQuery {
	objectSet: OntologyIrActionsObjectSet | undefined;
}
