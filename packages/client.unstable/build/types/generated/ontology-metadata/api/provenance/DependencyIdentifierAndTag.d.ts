import type { ProvenanceOntologyEntityIdentifier } from "./ProvenanceOntologyEntityIdentifier.js";
import type { Tag } from "./Tag.js";
/**
* Represents a Dependency Identifier (without version) + Tag
*/
export interface DependencyIdentifierAndTag {
	ontologyEntityIdentifier: ProvenanceOntologyEntityIdentifier;
	tag: Tag;
}
