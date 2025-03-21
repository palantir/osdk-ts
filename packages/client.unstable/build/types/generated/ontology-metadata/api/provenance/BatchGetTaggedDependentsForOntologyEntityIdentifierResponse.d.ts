import type { TaggedDependencyAndDependent } from "./TaggedDependencyAndDependent.js";
/**
* Batch endpoint for GetTaggedDependentsForOntologyEntityIdentifier. Loads all versions for each entity and does not page.
*/
export interface BatchGetTaggedDependentsForOntologyEntityIdentifierResponse {
	taggedDependencyAndDependents: Array<TaggedDependencyAndDependent>;
}
