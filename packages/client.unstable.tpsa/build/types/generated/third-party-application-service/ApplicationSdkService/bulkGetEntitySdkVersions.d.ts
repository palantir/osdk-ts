import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { BulkGetEntitySdkVersionsRequest } from "../BulkGetEntitySdkVersionsRequest.js";
import type { BulkGetEntitySdkVersionsResponse } from "../BulkGetEntitySdkVersionsResponse.js";
/**
* Bulk load oldest and latest SDK versions that entities appear in for a given application.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function bulkGetEntitySdkVersions(ctx: ConjureContext, applicationRid: ApplicationRid, request: BulkGetEntitySdkVersionsRequest): Promise<BulkGetEntitySdkVersionsResponse>;
