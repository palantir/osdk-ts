import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
import type { Version } from "./Version.mjs";
export declare function uploadSnapshotVersion(ctx: InternalClientContext, thirdPartyAppRid: ThirdPartyAppRid, version: string, snapshotId: string, zipFile: ReadableStream | Blob | BufferSource): Promise<Version>;
