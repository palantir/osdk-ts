import { type ConjureContext } from "conjure-lite";
import type { GetBulkLinksPageRequest } from "../GetBulkLinksPageRequest.js";
import type { GetBulkLinksPageResponse } from "../GetBulkLinksPageResponse.js";
/**
* Returns a page of all `FoundryLink`s for a given relation based on a list of object identifiers.
* The API supports fetching links for maximum 5_000 ObjectIdentifiers in a single request.
* Results are always limited to the maximum of 100_000 links, without applying any particular order. Specifically,
* this means that if total links count is above 100_000 then the whole result set should be considered partial,
* i.e. there is no guarantee that for a given object all links have been retrieved.
* Note that this endpoint does not check if objects referenced by the returned links actually exist. For instance,
* when primary keys in the join table become stale, it will still return links based on the stale join table records.
*
* Note that this API does not support OSv1 links and will throw an exception if links provided are backed by OSv1.
*/
export declare function getBulkLinksPage(ctx: ConjureContext, request: GetBulkLinksPageRequest): Promise<GetBulkLinksPageResponse>;
