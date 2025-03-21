import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* Migration to rename one property to another.
*/
export interface RenamePropertyMigration {
	source: PropertyTypeRid;
	target: PropertyTypeRid;
}
