import type { ObjectRid } from "./ObjectRid.js";
import type { ObjectSetEntities } from "./ObjectSetEntities.js";
import type { ScrollId } from "./ScrollId.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetObjectsScrollResponse {
	objectRids: Array<ObjectRid>;
	scrollId: ScrollId;
	totalObjects: number;
	objectSetEntities: ObjectSetEntities | undefined;
	usageCost: UsageCost | undefined;
}
