import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { Type } from "../../api/Type.js";
/**
* Note: This error does not block the branch from getting merged.
*
* Indicates that there is a change to the Type of a PropertyType (such as changing from an
* Integer to a String) that does not have a required schema migration associated with it.
* Validation only looks at migrations with `SourceSchemaVersion.latestVersion()`, other
* migrations will be ignored.
* Currently validation is for the most common schema migrations and there are some edge cases that
* we do not account for.
*
* Schema Migrations that are validated for include:
* - cast, where propertyTypeRid and target Type match
* - dropAllPatches
* - dropProperty, where propertyTypeRid matches
*
* Edge cases include:
* - revert migrations of a previous cast are not currently considered valid as part of this validation
* - multiple cast migrations for the same property on a branch are not considered valid as part of this validation
*/
export interface MissingPropertyDataTypeSchemaMigrationError {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
	sourceType: Type;
	targetType: Type;
}
