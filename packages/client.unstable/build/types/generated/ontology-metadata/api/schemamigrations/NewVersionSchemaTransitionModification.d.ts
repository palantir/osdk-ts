import type { SchemaMigrationInstructionModification } from "./SchemaMigrationInstructionModification.js";
import type { SourceSchemaVersion } from "./SourceSchemaVersion.js";
/**
* Instructions on how to transition from one schema version to the version that will be created.
*/
export interface NewVersionSchemaTransitionModification {
	source: SourceSchemaVersion;
	migrations: Array<SchemaMigrationInstructionModification>;
}
