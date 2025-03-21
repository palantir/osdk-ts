import type { OntologyRid } from "../../api/OntologyRid.js";
import type { ValidationError } from "./ValidationError.js";
/**
* A set of validation errors related to the ontology that have not been assigned to a specific resource.
*/
export interface OntologyErrors {
	validationErrors: Array<ValidationError>;
	ontologyRid: OntologyRid;
}
