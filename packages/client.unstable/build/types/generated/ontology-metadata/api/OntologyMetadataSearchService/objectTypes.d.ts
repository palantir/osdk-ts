import { type ConjureContext } from "conjure-lite";
import type { ObjectTypeSearchRequest } from "../search/ObjectTypeSearchRequest.js";
import type { ObjectTypeSearchResponse } from "../search/ObjectTypeSearchResponse.js";
/**
* This endpoint should only be used for batch processing workflows where all matches to a query need
* to be retrieved with a consistent view of the search index across pages. For other workflows use the
* `searchObjectTypes` endpoint.
* Time between fetching consecutive pages must not be more than 1 minute. Clients should always
* page until an empty page token is returned. Use the `searchObjectTypes` endpoint to avoid the timeout
* between pages.
*
* The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
* behind the last Ontology modification.
*/
export declare function objectTypes(ctx: ConjureContext, request: ObjectTypeSearchRequest): Promise<ObjectTypeSearchResponse>;
