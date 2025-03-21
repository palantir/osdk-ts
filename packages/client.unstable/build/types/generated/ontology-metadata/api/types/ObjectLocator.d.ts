import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectPrimaryKey } from "./ObjectPrimaryKey.js";
export interface ObjectLocator {
	objectTypeId: ObjectTypeId;
	primaryKey: ObjectPrimaryKey;
}
