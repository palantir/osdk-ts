import type { InternalClientContext } from "../internalClientContext.mjs";
import type { WidgetSetRid } from "../WidgetSetRid.js";
import type { ListWidgetSetReleasesResponse } from "./ListWidgetSetReleasesResponse.mjs";
export declare function listWidgetSetReleases(ctx: InternalClientContext, widgetSetRid: WidgetSetRid): Promise<ListWidgetSetReleasesResponse>;
