import { type ConjureContext } from "conjure-lite";
import type { TypeGroupSearchRequest } from "../search/TypeGroupSearchRequest.js";
import type { TypeGroupSearchResponse } from "../search/TypeGroupSearchResponse.js";
/**
* Endpoint to search TypeGroups based on various filters. Endpoint allows to return results based on
* relevance of the match. There is no timeout between fetching consecutive pages and clients do not need to
* page to the end. In some cases updates to the Ontology between fetching pages can cause the same result to
* be returned more than once.
*
* The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
* behind the last Ontology modification.
*/
export declare function searchTypeGroups(ctx: ConjureContext, request: TypeGroupSearchRequest): Promise<TypeGroupSearchResponse>;
