import type { PerOntologyUniqueIdentifier } from "./PerOntologyUniqueIdentifier.js";
/**
* Request to check existing unique identifiers before making an Ontology modification. A maximum of 500
* identifiers is allowed. This will also return reused ObjectTypeIds if on a multitenant stack.
*/
export interface CheckExistingUniqueIdentifiersRequest {
	perOntologyUniqueIdentifiers: Array<PerOntologyUniqueIdentifier>;
}
