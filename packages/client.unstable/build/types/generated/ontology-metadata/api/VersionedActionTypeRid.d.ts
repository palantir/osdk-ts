import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { ActionTypeVersion } from "./ActionTypeVersion.js";
/**
* ActionTypeRid with ActionTypeVersion.
*/
export interface VersionedActionTypeRid {
	rid: ActionTypeRid;
	version: ActionTypeVersion;
}
