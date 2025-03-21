import type { EntityMigrationCategory } from "./EntityMigrationCategory.js";
/**
* Contains the information for a finished migration.
*/
export interface EntityMigrationFinished {
	startTime: string;
	endTime: string;
	pulledEditsCount: string;
	hadPhonoRegistration: boolean;
	startingState: EntityMigrationCategory;
}
