import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* Migration to rename one property to another.
*/
export interface RenamePropertyMigrationModification {
	source: PropertyTypeRid;
	target: PropertyTypeId;
}
