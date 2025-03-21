import type { OntologyIrSchemaTransition } from "../schemamigrations/OntologyIrSchemaTransition.js";
import type { SchemaVersion } from "../SchemaVersion.js";
export interface OntologyIrSchemaTransitionsWithSchemaVersion {
	schemaTransitions: Array<OntologyIrSchemaTransition>;
	schemaVersion: SchemaVersion;
}
