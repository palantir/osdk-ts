import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { Type } from "../../api/Type.js";
/**
* Note: This error does not block the branch from getting merged.
*
* Indicates that a property type was deleted without the required schema migrations. Currently we only
* validate for the most common schema migrations. Validation only looks at migrations with
* `SourceSchemaVersion.latestVersion()`, other migrations will be ignored.
* There may be some edge cases not covered by this validation.
*
* Schema Migrations that are validated for include:
* - dropAllPatches (this is the only allowed migration in case of a primary key type change)
* - dropProperty where the propertyTypeRid matches the deleted property
* - renameProperty where the source matches the current propertyTypeRid and the target does not match the current propertyTypeId
*/
export interface MissingDeletedPropertyTypeSchemaMigrationError {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRid: PropertyTypeRid;
	type: Type;
}
