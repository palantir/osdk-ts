import type { WidgetSetRid } from "../WidgetSetRid.js";
import type { WidgetSetLocator } from "./WidgetSetLocator.mjs";
export interface WidgetSetRelease {
	widgetSetRid: WidgetSetRid;
	widgetSetVersion: string;
	locator: WidgetSetLocator;
	attribution: {
		userId: string
		timestamp: string
	};
	description?: string;
	widgetRids: string[];
}
