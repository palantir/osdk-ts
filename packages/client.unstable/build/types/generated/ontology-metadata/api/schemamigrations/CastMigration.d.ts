import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { Type } from "../Type.js";
/**
* Migration to cast a property to another type.
*/
export interface CastMigration {
	property: PropertyTypeRid;
	source: Type;
	target: Type;
}
