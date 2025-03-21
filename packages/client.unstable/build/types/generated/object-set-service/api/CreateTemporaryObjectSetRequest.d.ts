import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetFilterContext } from "./ObjectSetFilterContext.js";
import type { TimeToLive } from "./TimeToLive.js";
export interface CreateTemporaryObjectSetRequest {
	objectSet: ObjectSet;
	timeToLive: TimeToLive;
	objectSetFilterContext: ObjectSetFilterContext | undefined;
}
