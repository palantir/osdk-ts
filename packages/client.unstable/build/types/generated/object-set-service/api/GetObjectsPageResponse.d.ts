import type { ObjectRid } from "./ObjectRid.js";
import type { ObjectSetEntities } from "./ObjectSetEntities.js";
import type { PageToken } from "./PageToken.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetObjectsPageResponse {
	objectRids: Array<ObjectRid>;
	pageToken: PageToken | undefined;
	totalObjects: number;
	objectSetEntities: ObjectSetEntities | undefined;
	usageCost: UsageCost | undefined;
}
