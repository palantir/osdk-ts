import type { PerOntologyUniqueIdentifier } from "./PerOntologyUniqueIdentifier.js";
/**
* Response for checkExistingUniqueIdentifiers.
*/
export interface CheckExistingUniqueIdentifiersResponse {
	existingPerOntologyUniqueIdentifiers: Array<PerOntologyUniqueIdentifier>;
}
