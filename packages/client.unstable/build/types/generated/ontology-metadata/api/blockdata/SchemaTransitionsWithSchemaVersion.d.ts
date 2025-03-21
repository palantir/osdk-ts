import type { SchemaTransition } from "../schemamigrations/SchemaTransition.js";
import type { SchemaVersion } from "../SchemaVersion.js";
export interface SchemaTransitionsWithSchemaVersion {
	schemaTransitions: Array<SchemaTransition>;
	schemaVersion: SchemaVersion;
}
