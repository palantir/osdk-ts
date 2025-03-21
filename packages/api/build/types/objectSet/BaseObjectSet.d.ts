import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
export interface BaseObjectSet<Q extends ObjectOrInterfaceDefinition> {
	readonly $objectSetInternals: {
		def: Q
	};
}
