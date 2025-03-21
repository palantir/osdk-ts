import { type ConjureContext } from "conjure-lite";
import type { ObjectTypeSearchRequestV2 } from "../search/ObjectTypeSearchRequestV2.js";
import type { ObjectTypeSearchResponseV2 } from "../search/ObjectTypeSearchResponseV2.js";
/**
* Endpoint to search ObjectTypes based on various filters. Endpoint allows to return results based on relevance
* of the match. In contrast to the `objectTypes` endpoint there is no timeout between fetching consecutive pages
* and clients do not need to page to the end.
* In some cases updates to the Ontology between fetching pages can cause the same result to be returned more
* than once.
*
* The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
* behind the last Ontology modification.
*/
export declare function searchObjectTypes(ctx: ConjureContext, request: ObjectTypeSearchRequestV2): Promise<ObjectTypeSearchResponseV2>;
