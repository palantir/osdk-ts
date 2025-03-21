import type { InternalClientContext } from "../internalClientContext.mjs";
import type { WidgetSetRid } from "../WidgetSetRid.js";
import type { WidgetSetRelease } from "./WidgetSetRelease.mjs";
export declare function getWidgetSetRelease(ctx: InternalClientContext, widgetSetRid: WidgetSetRid, version: string): Promise<WidgetSetRelease>;
