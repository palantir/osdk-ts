import type { EntityMigrationStage } from "./EntityMigrationStage.js";
/**
* Contains the reason why the migration failed and at which stage.
*/
export interface EntityMigrationFailed {
	migrationStage: EntityMigrationStage;
	time: string;
	reason: string;
}
