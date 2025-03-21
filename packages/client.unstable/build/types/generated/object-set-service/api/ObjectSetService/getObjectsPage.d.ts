import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetObjectsPageRequest } from "../GetObjectsPageRequest.js";
import type { GetObjectsPageResponse } from "../GetObjectsPageResponse.js";
/**
* Fetches object rids on requested page of evaluated object set. If more objects are available, the returned pageToken can be used to fetch the subsequent page. Note that page tokens are *not* long-lived and *may* get invalidated (for example following updates to the underlying index or indices, or after a few minutes).
* Note that the service currently does not provide guarantees around the consistency of returned results. In particular, any state changes to the underlying indices can cause duplicate results to be returned or some results to be skipped between subsequent page requests.
*/
export declare function getObjectsPage(ctx: ConjureContext, request: GetObjectsPageRequest, backend: Backend | undefined): Promise<GetObjectsPageResponse>;
