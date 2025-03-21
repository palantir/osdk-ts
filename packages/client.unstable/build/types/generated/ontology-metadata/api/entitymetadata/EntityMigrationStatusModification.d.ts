import type { EntityMigrationAborted } from "./EntityMigrationAborted.js";
import type { EntityMigrationFailed } from "./EntityMigrationFailed.js";
import type { EntityMigrationFinished } from "./EntityMigrationFinished.js";
import type { EntityMigrationInProgress } from "./EntityMigrationInProgress.js";
export interface EntityMigrationStatusModification_migrationFailed {
	type: "migrationFailed";
	migrationFailed: EntityMigrationFailed;
}
export interface EntityMigrationStatusModification_migrationAborted {
	type: "migrationAborted";
	migrationAborted: EntityMigrationAborted;
}
export interface EntityMigrationStatusModification_migrationInProgress {
	type: "migrationInProgress";
	migrationInProgress: EntityMigrationInProgress;
}
export interface EntityMigrationStatusModification_migrationFinished {
	type: "migrationFinished";
	migrationFinished: EntityMigrationFinished;
}
/**
* Contains the migration status for the Object Storage V1 to Object Storage V2 migration for an ontology entity.
* The migration status will be stored by Funnel and can be read by consumers to retrieve information about the
* status of the migration for this entity.
*/
export type EntityMigrationStatusModification = EntityMigrationStatusModification_migrationFailed | EntityMigrationStatusModification_migrationAborted | EntityMigrationStatusModification_migrationInProgress | EntityMigrationStatusModification_migrationFinished;
