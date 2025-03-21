import type { GlobalBranchRid } from "../GlobalBranchRid.js";
import type { Dependent } from "./Dependent.js";
import type { ProvenanceDependentOntologyEntities } from "./ProvenanceDependentOntologyEntities.js";
import type { Tag } from "./Tag.js";
/**
* Request to register a dependency between the given Dependent and the given OntologyEntities.
*/
export interface RegisterDependencyRequest {
	ontologyEntities: ProvenanceDependentOntologyEntities;
	dependent: Dependent;
	tags: Array<Tag>;
	globalBranchRid: GlobalBranchRid | undefined;
}
