import type { SchemaVersion } from "../SchemaVersion.js";
import type { OntologyIrSchemaMigration } from "./OntologyIrSchemaMigration.js";
/**
* Instructions on how to transition from one schema version to another.
*/
export interface OntologyIrSchemaTransition {
	source: SchemaVersion;
	target: SchemaVersion;
	migrations: Array<OntologyIrSchemaMigration>;
}
