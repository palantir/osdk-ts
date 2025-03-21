import type { EntityTypeRid } from "../api/EntityTypeRid.js";
import type { LoggableEntityPrimaryKey } from "./LoggableEntityPrimaryKey.js";
/**
* See com.palantir.object.set.api.EntityLocator
*/
export interface LoggableEntityLocator {
	entityTypeRid: EntityTypeRid;
	entityPrimarykey: LoggableEntityPrimaryKey;
}
