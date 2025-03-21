import type { SchemaVersion } from "../SchemaVersion.js";
import type { LoadSchemaMigrationAuditRecord } from "./LoadSchemaMigrationAuditRecord.js";
export interface LoadObjectTypeSchemaMigrationsAuditRecord {
	migrations: Array<LoadSchemaMigrationAuditRecord>;
	schemaVersion: SchemaVersion;
}
