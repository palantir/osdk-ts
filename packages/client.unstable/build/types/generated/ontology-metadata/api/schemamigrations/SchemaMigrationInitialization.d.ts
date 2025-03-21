import type { SchemaMigrationInstructionInitialization } from "./SchemaMigrationInstructionInitialization.js";
export interface SchemaMigrationInitialization {
	migrations: Array<SchemaMigrationInstructionInitialization>;
}
