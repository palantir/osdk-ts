import type { GetTaggedDependentsForOntologyEntityIdentifierPagingToken } from "./GetTaggedDependentsForOntologyEntityIdentifierPagingToken.js";
import type { ProvenanceOntologyEntityIdentifier } from "./ProvenanceOntologyEntityIdentifier.js";
import type { Tag } from "./Tag.js";
/**
* Request to get the tagged dependents on the given an OntologyEntity Identifier.
*/
export interface GetTaggedDependentsForOntologyEntityIdentifierRequest {
	ontologyEntityIdentifier: ProvenanceOntologyEntityIdentifier;
	tag: Tag;
	pageToken: GetTaggedDependentsForOntologyEntityIdentifierPagingToken | undefined;
}
