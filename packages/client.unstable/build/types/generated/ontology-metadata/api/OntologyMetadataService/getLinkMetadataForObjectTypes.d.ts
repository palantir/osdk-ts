import { type ConjureContext } from "conjure-lite";
import type { GetLinkMetadataForObjectTypesRequest } from "../GetLinkMetadataForObjectTypesRequest.js";
import type { GetLinkMetadataForObjectTypesResponse } from "../GetLinkMetadataForObjectTypesResponse.js";
/**
* Endpoint to batch load links associated to given ObjectTypeRid(s). The GetLinkTypesForObjectTypesResponse
* will only contain links that are visible to the user. If the user has requested to get links at for
* ObjectTypeRid(s) that do not exist in the specified versions, those entries will include an empty set
* of link types.
*/
export declare function getLinkMetadataForObjectTypes(ctx: ConjureContext, request: GetLinkMetadataForObjectTypesRequest): Promise<GetLinkMetadataForObjectTypesResponse>;
