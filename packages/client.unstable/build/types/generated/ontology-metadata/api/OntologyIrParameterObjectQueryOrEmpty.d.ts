import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterObjectQuery } from "./OntologyIrParameterObjectQuery.js";
export interface OntologyIrParameterObjectQueryOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterObjectQueryOrEmpty_objectQuery {
	type: "objectQuery";
	objectQuery: OntologyIrParameterObjectQuery;
}
/**
* Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
*/
export type OntologyIrParameterObjectQueryOrEmpty = OntologyIrParameterObjectQueryOrEmpty_empty | OntologyIrParameterObjectQueryOrEmpty_objectQuery;
