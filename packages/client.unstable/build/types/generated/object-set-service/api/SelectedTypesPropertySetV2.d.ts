import type { OntologyTypeSelection } from "./OntologyTypeSelection.js";
/**
* Specify a subset of properties by their types. Runtime derived properties will always be returned.
*/
export interface SelectedTypesPropertySetV2 {
	propertyOntologyTypes: Array<OntologyTypeSelection>;
}
