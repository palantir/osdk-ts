import type { InternalClientContext } from "../internalClientContext.mjs";
import type { StemmaRepositoryRid } from "../StemmaRepositoryRid.js";
import type { WidgetSetRid } from "../WidgetSetRid.js";
export declare function uploadSiteVersion(ctx: InternalClientContext, repositoryRid: WidgetSetRid | StemmaRepositoryRid, version: string, zipFile: ReadableStream | Blob | BufferSource): Promise<void>;
