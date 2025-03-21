import type { AllNotificationRenderingMustSucceed } from "./AllNotificationRenderingMustSucceed.js";
import type { AnyNotificationRenderingCanFail } from "./AnyNotificationRenderingCanFail.js";
export interface RenderingSettings_allNotificationRenderingMustSucceed {
	type: "allNotificationRenderingMustSucceed";
	allNotificationRenderingMustSucceed: AllNotificationRenderingMustSucceed;
}
export interface RenderingSettings_anyNotificationRenderingCanFail {
	type: "anyNotificationRenderingCanFail";
	anyNotificationRenderingCanFail: AnyNotificationRenderingCanFail;
}
/**
* Settings that determine the rendering behaviour for notifications in current ActionType
*/
export type RenderingSettings = RenderingSettings_allNotificationRenderingMustSucceed | RenderingSettings_anyNotificationRenderingCanFail;
