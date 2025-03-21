import { type ConjureContext } from "conjure-lite";
import type { BulkGetApplicationsForClientsRequest } from "../BulkGetApplicationsForClientsRequest.js";
import type { BulkGetApplicationsForClientsResponse } from "../BulkGetApplicationsForClientsResponse.js";
/**
* Bulk load the RIDs of the third-party applications associated with the given
* client IDs. At most 100 clients may be loaded in a single request.
*
* Only clients where the user has third-party-application:view-oauth-client on the
* client rid based on its id will be returned.
*/
export declare function bulkGetApplicationsForClients(ctx: ConjureContext, request: BulkGetApplicationsForClientsRequest): Promise<BulkGetApplicationsForClientsResponse>;
