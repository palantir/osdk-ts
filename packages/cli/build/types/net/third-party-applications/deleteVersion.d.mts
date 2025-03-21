import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
export declare function deleteVersion(ctx: InternalClientContext, thirdPartyAppRid: ThirdPartyAppRid, version: string): Promise<void>;
