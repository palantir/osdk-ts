import type { WidgetSetManifest } from "@osdk/widget.api.unstable";
import type { WidgetBuildOutputs } from "./getWidgetBuildOutputs.js";
export declare function buildWidgetSetManifest(widgetSetRid: string, widgetSetVersion: string, widgetBuilds: WidgetBuildOutputs[]): WidgetSetManifest;
