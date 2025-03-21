import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
import type { DeployWebsiteRequest } from "./DeployWebsiteRequest.mjs";
import type { Website } from "./Website.mjs";
export declare function deployWebsite(ctx: InternalClientContext, thirdPartyAppRid: ThirdPartyAppRid, request: DeployWebsiteRequest): Promise<Website>;
