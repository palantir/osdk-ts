import { type ConjureContext } from "conjure-lite";
import type { SharedPropertyTypeSearchRequest } from "../search/SharedPropertyTypeSearchRequest.js";
import type { SharedPropertyTypeSearchResponse } from "../search/SharedPropertyTypeSearchResponse.js";
/**
* Endpoint to search SharedPropertyTypes based on various filters. Endpoint allows to return results based on
* relevance of the match. There is no timeout between fetching consecutive pages and clients do not need to
* page to the end. In some cases updates to the Ontology between fetching pages can cause the same result to
* be returned more than once.
*
* The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
* behind the last Ontology modification.
*/
export declare function searchSharedPropertyTypes(ctx: ConjureContext, request: SharedPropertyTypeSearchRequest): Promise<SharedPropertyTypeSearchResponse>;
