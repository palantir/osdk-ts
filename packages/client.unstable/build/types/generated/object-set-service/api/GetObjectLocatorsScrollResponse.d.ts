import type { ObjectLocator } from "./ObjectLocator.js";
import type { ObjectSetEntities } from "./ObjectSetEntities.js";
import type { ScrollId } from "./ScrollId.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetObjectLocatorsScrollResponse {
	objectLocators: Array<ObjectLocator>;
	scrollId: ScrollId;
	totalObjects: number;
	objectSetEntities: ObjectSetEntities | undefined;
	usageCost: UsageCost | undefined;
}
