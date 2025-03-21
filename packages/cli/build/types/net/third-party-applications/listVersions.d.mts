import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
import type { ListVersionsResponse } from "./ListVersionsResponse.mjs";
export declare function listVersions(ctx: InternalClientContext, thirdPartyAppRid: ThirdPartyAppRid): Promise<ListVersionsResponse>;
