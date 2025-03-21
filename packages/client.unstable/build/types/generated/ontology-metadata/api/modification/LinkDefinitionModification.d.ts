import type { IntermediaryLinkDefinitionModification } from "./IntermediaryLinkDefinitionModification.js";
import type { ManyToManyLinkDefinitionModification } from "./ManyToManyLinkDefinitionModification.js";
import type { OneToManyLinkDefinitionModification } from "./OneToManyLinkDefinitionModification.js";
export interface LinkDefinitionModification_manyToMany {
	type: "manyToMany";
	manyToMany: ManyToManyLinkDefinitionModification;
}
export interface LinkDefinitionModification_oneToMany {
	type: "oneToMany";
	oneToMany: OneToManyLinkDefinitionModification;
}
export interface LinkDefinitionModification_intermediary {
	type: "intermediary";
	intermediary: IntermediaryLinkDefinitionModification;
}
export type LinkDefinitionModification = LinkDefinitionModification_manyToMany | LinkDefinitionModification_oneToMany | LinkDefinitionModification_intermediary;
