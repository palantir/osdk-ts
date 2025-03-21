import type { OntologyAuthScope } from "./OntologyAuthScope.js";
export interface AuthScope_ontology {
	type: "ontology";
	ontology: OntologyAuthScope;
}
export type AuthScope = AuthScope_ontology;
