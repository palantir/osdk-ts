import type { InternalClientContext } from "../internalClientContext.mjs";
import type { StemmaRepositoryRid } from "../StemmaRepositoryRid.js";
import type { WidgetSetRid } from "../WidgetSetRid.js";
export declare function publishManifest(ctx: InternalClientContext, repositoryRid: WidgetSetRid | StemmaRepositoryRid, version: string): Promise<void>;
