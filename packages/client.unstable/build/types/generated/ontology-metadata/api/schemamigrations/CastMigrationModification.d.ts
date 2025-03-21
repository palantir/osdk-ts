import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { Type } from "../Type.js";
/**
* Migration to cast a property to another type.
*/
export interface CastMigrationModification {
	property: PropertyTypeRid;
	target: Type;
}
