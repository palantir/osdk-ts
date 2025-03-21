import type { Dependent } from "./Dependent.js";
import type { ProvenanceOntologyEntityRid } from "./ProvenanceOntologyEntityRid.js";
import type { Tag } from "./Tag.js";
/**
* Represents a Dependency -> Dependent at a specific Tag
*/
export interface TaggedDependencyAndDependent {
	dependent: Dependent;
	ontologyEntity: ProvenanceOntologyEntityRid;
	tag: Tag;
}
