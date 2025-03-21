import type { GetDependenciesV2PagingToken } from "./GetDependenciesV2PagingToken.js";
import type { ProvenanceOntologyEntityRid } from "./ProvenanceOntologyEntityRid.js";
import type { Version } from "./Version.js";
/**
* Contains a page of OntologyEntities that are depended on by the requested resource at the tagged version.
*/
export interface GetDependenciesForTaggedDependentResponseV2Success {
	ontologyEntityPageItems: Array<ProvenanceOntologyEntityRid>;
	version: Version | undefined;
	nextPageToken: GetDependenciesV2PagingToken | undefined;
	totalEntitiesCount: number;
}
