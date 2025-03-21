import type { ObjectTypeRid } from "../ObjectTypeRid.js";
/**
* Edits history tracking is enabled for this entity with the specified configuration. All action edits
* for objects of this object type will be available for querying from the point the history was enabled.
*/
export interface EditsHistoryConfig {
	store: ObjectTypeRid;
}
