import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { OntologyIrSchemaTransitionsWithSchemaVersion } from "./OntologyIrSchemaTransitionsWithSchemaVersion.js";
export interface OntologyIrSchemaMigrationBlockData {
	schemaMigrations: OntologyIrSchemaTransitionsWithSchemaVersion;
	propertyTypeRidsToIds: Record<ObjectTypeFieldApiName, PropertyTypeId>;
}
