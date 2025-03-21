import type { OntologyIrManyToManyLinkDefinition } from "./OntologyIrManyToManyLinkDefinition.js";
import type { OntologyIrOneToManyLinkDefinition } from "./OntologyIrOneToManyLinkDefinition.js";
export interface OntologyIrLinkDefinition_manyToMany {
	type: "manyToMany";
	manyToMany: OntologyIrManyToManyLinkDefinition;
}
export interface OntologyIrLinkDefinition_oneToMany {
	type: "oneToMany";
	oneToMany: OntologyIrOneToManyLinkDefinition;
}
export type OntologyIrLinkDefinition = OntologyIrLinkDefinition_manyToMany | OntologyIrLinkDefinition_oneToMany;
