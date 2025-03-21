import type { ObjectTypeRid } from "../api/ObjectTypeRid.js";
import type { LoggableObjectPrimaryKeyV2 } from "./LoggableObjectPrimaryKeyV2.js";
/**
* See com.palantir.object.set.api.ObjectLocatorV2
*/
export interface LoggableObjectLocatorV2 {
	objectTypeRid: ObjectTypeRid;
	objectPrimaryKey: LoggableObjectPrimaryKeyV2;
}
