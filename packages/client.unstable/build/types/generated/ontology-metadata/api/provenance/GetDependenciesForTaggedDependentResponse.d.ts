import type { GetDependenciesPagingToken } from "./GetDependenciesPagingToken.js";
import type { ProvenanceOntologyEntityRid } from "./ProvenanceOntologyEntityRid.js";
import type { Version } from "./Version.js";
/**
* Response type of GetDependenciesForTaggedDependentRequest. Contains a page of OntologyEntites that are
* depended on by the requested resource at the tagged version..
*/
export interface GetDependenciesForTaggedDependentResponse {
	ontologyEntityPageItems: Array<ProvenanceOntologyEntityRid>;
	version: Version | undefined;
	nextPageToken: GetDependenciesPagingToken | undefined;
}
