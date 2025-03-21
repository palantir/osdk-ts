import type { EntityPrimaryKey } from "./EntityPrimaryKey.js";
import type { EntityTypeRid } from "./EntityTypeRid.js";
/**
* Information necessary to uniquely identify an object or a many-to-many link.
*/
export interface EntityLocator {
	entityTypeRid: EntityTypeRid;
	entityPrimarykey: EntityPrimaryKey;
}
