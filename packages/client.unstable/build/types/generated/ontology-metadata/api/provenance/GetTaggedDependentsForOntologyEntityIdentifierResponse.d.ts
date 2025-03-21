import type { GetTaggedDependentsForOntologyEntityIdentifierPagingToken } from "./GetTaggedDependentsForOntologyEntityIdentifierPagingToken.js";
import type { TaggedDependencyAndDependent } from "./TaggedDependencyAndDependent.js";
/**
* Contains a page of the Dependents of the requested OntologyEntity's Identifier.
*/
export interface GetTaggedDependentsForOntologyEntityIdentifierResponse {
	taggedDependencyAndDependents: Array<TaggedDependencyAndDependent>;
	nextPageToken: GetTaggedDependentsForOntologyEntityIdentifierPagingToken | undefined;
}
