import type { ObjectPrimaryKey } from "./ObjectPrimaryKey.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* Information necessary to uniquely identify an object.
*/
export interface ObjectLocator {
	objectTypeId: ObjectTypeId;
	objectPrimaryKey: ObjectPrimaryKey;
}
