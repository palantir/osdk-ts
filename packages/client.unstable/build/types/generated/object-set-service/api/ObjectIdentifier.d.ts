import type { ObjectLocatorV2 } from "./ObjectLocatorV2.js";
import type { ObjectRid } from "./ObjectRid.js";
export interface ObjectIdentifier_objectRid {
	type: "objectRid";
	objectRid: ObjectRid;
}
export interface ObjectIdentifier_objectLocatorV2 {
	type: "objectLocatorV2";
	objectLocatorV2: ObjectLocatorV2;
}
/**
* Information necessary to uniquely identify an object.
*/
export type ObjectIdentifier = ObjectIdentifier_objectRid | ObjectIdentifier_objectLocatorV2;
