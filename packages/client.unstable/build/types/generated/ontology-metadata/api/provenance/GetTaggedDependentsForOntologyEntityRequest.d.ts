import type { GetTaggedDependentsPagingToken } from "./GetTaggedDependentsPagingToken.js";
import type { ProvenanceOntologyEntityRid } from "./ProvenanceOntologyEntityRid.js";
import type { Tag } from "./Tag.js";
/**
* Request to get the tagged dependents on the given OntologyEntity.
*/
export interface GetTaggedDependentsForOntologyEntityRequest {
	pageToken: GetTaggedDependentsPagingToken | undefined;
	ontologyEntity: ProvenanceOntologyEntityRid;
	tag: Tag;
}
