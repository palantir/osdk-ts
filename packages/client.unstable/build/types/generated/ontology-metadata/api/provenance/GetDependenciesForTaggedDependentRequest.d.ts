import type { GetDependenciesPagingToken } from "./GetDependenciesPagingToken.js";
import type { Tag } from "./Tag.js";
/**
* Request to get the OntologyEntities which have the requested Dependent.
*/
export interface GetDependenciesForTaggedDependentRequest {
	pageToken: GetDependenciesPagingToken | undefined;
	resource: string;
	tag: Tag;
}
