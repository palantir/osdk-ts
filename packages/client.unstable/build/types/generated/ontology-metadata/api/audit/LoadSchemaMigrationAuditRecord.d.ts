import type { SchemaMigrationRid } from "../SchemaMigrationRid.js";
import type { SchemaVersion } from "../SchemaVersion.js";
export interface LoadSchemaMigrationAuditRecord {
	source: SchemaVersion;
	target: SchemaVersion;
	migrationRid: Array<SchemaMigrationRid>;
}
