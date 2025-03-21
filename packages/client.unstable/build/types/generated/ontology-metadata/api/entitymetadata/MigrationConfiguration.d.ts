import type { EntityMigrationCategory } from "./EntityMigrationCategory.js";
import type { TransitionWindows } from "./TransitionWindows.js";
/**
* Contains configuration for Phonograph to Funnel/Highbury migration.
*/
export interface MigrationConfiguration {
	entityMigrationCategory: EntityMigrationCategory;
	minMigrationDuration: string;
	transitionWindows: TransitionWindows;
	transitionRetryLimit: number;
}
