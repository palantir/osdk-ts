import type { AllFoundryRids } from "./AllFoundryRids.js";
import type { ObjectsPlatformRids } from "./ObjectsPlatformRids.js";
export interface RidFormatter_objectsPlatformRids {
	type: "objectsPlatformRids";
	objectsPlatformRids: ObjectsPlatformRids;
}
export interface RidFormatter_allFoundryRids {
	type: "allFoundryRids";
	allFoundryRids: AllFoundryRids;
}
/**
* Convert Resource Identifiers into human-readable format. For example,
* show the display name of an Object Set as opposed to its Rid.
*/
export type RidFormatter = RidFormatter_objectsPlatformRids | RidFormatter_allFoundryRids;
