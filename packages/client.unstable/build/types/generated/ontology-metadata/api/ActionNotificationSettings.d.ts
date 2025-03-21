import type { RedactionOverrideOptions } from "./RedactionOverrideOptions.js";
import type { RenderingSettings } from "./RenderingSettings.js";
/**
* Settings that would be applied to a notification
*/
export interface ActionNotificationSettings {
	renderingSettings: RenderingSettings;
	redactionOverride: RedactionOverrideOptions | undefined;
}
