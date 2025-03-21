import type { OntologyErrors } from "./OntologyErrors.js";
import type { ResourceErrors } from "./ResourceErrors.js";
import type { ValidationError } from "./ValidationError.js";
export interface ErrorStatus {
	errors: Array<ValidationError>;
	resourceErrors: ResourceErrors;
	ontologyErrors: OntologyErrors;
}
