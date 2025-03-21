import type { ObjectLocatorV2 } from "./ObjectLocatorV2.js";
import type { ObjectRid } from "./ObjectRid.js";
/**
* Identifiers that reference single `FoundryObject`.
*/
export interface FoundryObjectReference {
	objectRid: ObjectRid;
	objectLocatorV2: ObjectLocatorV2;
}
