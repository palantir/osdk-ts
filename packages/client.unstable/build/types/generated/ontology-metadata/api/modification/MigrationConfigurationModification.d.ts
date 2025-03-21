import type { TransitionWindows } from "../entitymetadata/TransitionWindows.js";
/**
* Request to set the migration configuration for the Phonograph to Highbury migration for an entity.
*/
export interface MigrationConfigurationModification {
	minMigrationDuration: string;
	transitionWindows: TransitionWindows;
	transitionRetryLimit: number;
}
