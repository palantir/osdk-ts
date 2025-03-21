import type { Dependent } from "./Dependent.js";
import type { GetTaggedDependentsPagingToken } from "./GetTaggedDependentsPagingToken.js";
/**
* Response type of GetTaggedDependenciesForOntologyEntityRequest. Contains a page of the Dependents of the
* requested OntologyEntity.
*/
export interface GetTaggedDependentsForOntologyEntityResponse {
	taggedDependentPageItems: Array<Dependent>;
	nextPageToken: GetTaggedDependentsPagingToken | undefined;
}
