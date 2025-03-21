import type { IntermediaryLinkDefinition } from "./IntermediaryLinkDefinition.js";
import type { ManyToManyLinkDefinition } from "./ManyToManyLinkDefinition.js";
import type { OneToManyLinkDefinition } from "./OneToManyLinkDefinition.js";
export interface LinkDefinition_manyToMany {
	type: "manyToMany";
	manyToMany: ManyToManyLinkDefinition;
}
export interface LinkDefinition_oneToMany {
	type: "oneToMany";
	oneToMany: OneToManyLinkDefinition;
}
export interface LinkDefinition_intermediary {
	type: "intermediary";
	intermediary: IntermediaryLinkDefinition;
}
export type LinkDefinition = LinkDefinition_manyToMany | LinkDefinition_oneToMany | LinkDefinition_intermediary;
