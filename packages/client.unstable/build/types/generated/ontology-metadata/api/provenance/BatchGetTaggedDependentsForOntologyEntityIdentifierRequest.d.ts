import type { DependencyIdentifierAndTag } from "./DependencyIdentifierAndTag.js";
/**
* Batch endpoint for GetTaggedDependentsForOntologyEntityIdentifier. Loads all versions for each entity and does not page.
*/
export interface BatchGetTaggedDependentsForOntologyEntityIdentifierRequest {
	dependencyAndTags: Array<DependencyIdentifierAndTag>;
}
