import type { EntityMigrationStage } from "./EntityMigrationStage.js";
/**
* Contains the information when the migration was aborted.
*/
export interface EntityMigrationAborted {
	migrationStage: EntityMigrationStage;
	time: string;
}
