import type { ObjectRid } from "../api/ObjectRid.js";
import type { LoggableObjectLocatorV2 } from "./LoggableObjectLocatorV2.js";
export interface LoggableObjectIdentifier_objectRid {
	type: "objectRid";
	objectRid: ObjectRid;
}
export interface LoggableObjectIdentifier_objectLocatorV2 {
	type: "objectLocatorV2";
	objectLocatorV2: LoggableObjectLocatorV2;
}
/**
* See com.palantir.object.set.api.ObjectIdentifier
*/
export type LoggableObjectIdentifier = LoggableObjectIdentifier_objectRid | LoggableObjectIdentifier_objectLocatorV2;
