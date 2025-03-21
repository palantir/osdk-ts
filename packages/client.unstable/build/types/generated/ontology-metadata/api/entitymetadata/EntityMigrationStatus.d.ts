import type { EntityMigrationAborted } from "./EntityMigrationAborted.js";
import type { EntityMigrationFailed } from "./EntityMigrationFailed.js";
import type { EntityMigrationFinished } from "./EntityMigrationFinished.js";
import type { EntityMigrationInProgress } from "./EntityMigrationInProgress.js";
import type { EntityMigrationNotAttempted } from "./EntityMigrationNotAttempted.js";
export interface EntityMigrationStatus_migrationNotAttempted {
	type: "migrationNotAttempted";
	migrationNotAttempted: EntityMigrationNotAttempted;
}
export interface EntityMigrationStatus_migrationFailed {
	type: "migrationFailed";
	migrationFailed: EntityMigrationFailed;
}
export interface EntityMigrationStatus_migrationAborted {
	type: "migrationAborted";
	migrationAborted: EntityMigrationAborted;
}
export interface EntityMigrationStatus_migrationInProgress {
	type: "migrationInProgress";
	migrationInProgress: EntityMigrationInProgress;
}
export interface EntityMigrationStatus_migrationFinished {
	type: "migrationFinished";
	migrationFinished: EntityMigrationFinished;
}
/**
* Contains the current migration status populated by Funnel.
*/
export type EntityMigrationStatus = EntityMigrationStatus_migrationNotAttempted | EntityMigrationStatus_migrationFailed | EntityMigrationStatus_migrationAborted | EntityMigrationStatus_migrationInProgress | EntityMigrationStatus_migrationFinished;
