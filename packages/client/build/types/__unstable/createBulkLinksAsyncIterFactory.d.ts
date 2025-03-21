import type { OsdkBase } from "@osdk/api";
import type { EXPERIMENTAL_BulkLinkResult as BulkLinkResult } from "@osdk/api/unstable";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare function createBulkLinksAsyncIterFactory(ctx: MinimalClient): (objs: Array<OsdkBase<any>>, linkTypes: string[]) => AsyncGenerator<BulkLinkResult, void, unknown>;
