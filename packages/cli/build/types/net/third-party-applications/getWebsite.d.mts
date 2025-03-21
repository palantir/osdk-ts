import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
import type { Website } from "./Website.mjs";
export declare function getWebsite(ctx: InternalClientContext, thirdPartyAppRid: ThirdPartyAppRid): Promise<Website | undefined>;
