import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* Indicates that there is a primary key change without a DropAllPatchesMigration.
*/
export interface PrimaryKeyChangeMigrationError {
	objectTypeRid: ObjectTypeRid;
	existingPrimaryKeys: Array<PropertyTypeRid>;
	newPrimaryKeys: Array<PropertyTypeRid>;
	newPrimaryKeyIds: Array<PropertyTypeId>;
}
