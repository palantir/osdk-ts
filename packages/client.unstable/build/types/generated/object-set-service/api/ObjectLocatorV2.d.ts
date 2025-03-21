import type { ObjectPrimaryKeyV2 } from "./ObjectPrimaryKeyV2.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Information necessary to uniquely identify an object.
*/
export interface ObjectLocatorV2 {
	objectTypeRid: ObjectTypeRid;
	objectPrimaryKey: ObjectPrimaryKeyV2;
}
