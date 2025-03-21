import type { ObjectRid } from "../api/ObjectRid.js";
import type { LoggableObjectLocatorV2 } from "./LoggableObjectLocatorV2.js";
/**
* See com.palantir.object.set.api.FoundryObjectReference
*/
export interface LoggableFoundryObjectReference {
	objectRid: ObjectRid;
	objectLocatorV2: LoggableObjectLocatorV2;
}
