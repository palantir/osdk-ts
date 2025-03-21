import { type ConjureContext } from "conjure-lite";
import type { BulkGetApplicationsRequest } from "../BulkGetApplicationsRequest.js";
import type { BulkGetApplicationsResponse } from "../BulkGetApplicationsResponse.js";
/**
* Bulk load third-party application definitions at specified versions. At most 100
* applications may be loaded in a single request.
*
* Only applications where the user has third-party-application:view-application on
* the application rid will be returned.
*/
export declare function bulkGetApplications(ctx: ConjureContext, request: BulkGetApplicationsRequest): Promise<BulkGetApplicationsResponse>;
