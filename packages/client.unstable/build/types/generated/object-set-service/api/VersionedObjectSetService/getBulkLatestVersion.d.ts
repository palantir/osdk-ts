import { type ConjureContext } from "conjure-lite";
import type { GetBulkLatestVersionRequest } from "../GetBulkLatestVersionRequest.js";
import type { GetBulkLatestVersionResponse } from "../GetBulkLatestVersionResponse.js";
/**
* Returns the latest versions of requested versioned object sets.
*/
export declare function getBulkLatestVersion(ctx: ConjureContext, request: GetBulkLatestVersionRequest): Promise<GetBulkLatestVersionResponse>;
