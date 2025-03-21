import { type ConjureContext } from "conjure-lite";
import type { GetLinkTypesForObjectTypesRequest } from "../GetLinkTypesForObjectTypesRequest.js";
import type { GetLinkTypesForObjectTypesResponse } from "../GetLinkTypesForObjectTypesResponse.js";
/**
* Endpoint to batch load links associated to given ObjectTypeRid(s). The GetLinkTypesForObjectTypesResponse
* will only contain links that are visible to the user. If the user has requested to get link types at
* invalid ontology versions or for ObjectTypeRid(s) that do not exist in the specified versions, those entries
* will include an empty set of link types.
*
* The includeObjectTypesWithoutSearchableDatasources flag is respected if present in the request,
* else we set it to a default (false) unless the user-agent is blocklisted.
* The flag is set to true for blocklisted user agents. Currently the blocklist
* includes functions-typescript-gradle-plugin only.
*/
export declare function getLinkTypesForObjectTypes(ctx: ConjureContext, request: GetLinkTypesForObjectTypesRequest): Promise<GetLinkTypesForObjectTypesResponse>;
