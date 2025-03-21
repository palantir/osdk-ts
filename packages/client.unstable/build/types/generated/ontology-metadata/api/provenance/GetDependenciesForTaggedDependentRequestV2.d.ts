import type { GetDependenciesV2PagingToken } from "./GetDependenciesV2PagingToken.js";
import type { ProvenanceOntologyEntityRidType } from "./ProvenanceOntologyEntityRidType.js";
import type { Tag } from "./Tag.js";
/**
* Request to get the OntologyEntities which have the requested Dependent.
*/
export interface GetDependenciesForTaggedDependentRequestV2 {
	pageSize: number | undefined;
	pageToken: GetDependenciesV2PagingToken | undefined;
	entityTypes: Array<ProvenanceOntologyEntityRidType>;
	resource: string;
	tag: Tag;
	includeEntitiesWithoutAccess: boolean;
}
