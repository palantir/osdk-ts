import type { SchemaVersion } from "../SchemaVersion.js";
import type { SchemaMigration } from "./SchemaMigration.js";
/**
* Instructions on how to transition from one schema version to another.
*/
export interface SchemaTransition {
	source: SchemaVersion;
	target: SchemaVersion;
	migrations: Array<SchemaMigration>;
}
