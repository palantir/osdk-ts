import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* Migration to drop the given property.
*/
export interface DropPropertyMigration {
	property: PropertyTypeRid;
}
