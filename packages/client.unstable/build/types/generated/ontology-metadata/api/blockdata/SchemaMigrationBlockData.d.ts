import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { SchemaTransitionsWithSchemaVersion } from "./SchemaTransitionsWithSchemaVersion.js";
export interface SchemaMigrationBlockData {
	schemaMigrations: SchemaTransitionsWithSchemaVersion;
	propertyTypeRidsToIds: Record<PropertyTypeRid, PropertyTypeId>;
}
