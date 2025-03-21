import type { TelemetryContainerRid } from "./TelemetryContainerRid.js";
import type { TelemetrySessionId } from "./TelemetrySessionId.js";
export interface TelemetryContext {
	containerRid: TelemetryContainerRid;
	sessionId: TelemetrySessionId;
}
