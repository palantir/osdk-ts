import type { SchemaVersion } from "../SchemaVersion.js";
import type { SchemaMigrationInstruction } from "./SchemaMigrationInstruction.js";
/**
* Instructions on how to transition from one schema version to another. Can be used to fix past
* transitions.
*/
export interface PastVersionSchemaTransitionModification {
	source: SchemaVersion;
	target: SchemaVersion;
	migrations: Array<SchemaMigrationInstruction>;
}
