import type { ObjectSetRid } from "./ObjectSetRid.js";
/**
* This static object set was created via materializing some other object set.
*/
export interface MaterializationProvenance {
	objectSetRid: ObjectSetRid;
	materializationTime: string;
}
