import type { OntologyIrEditsWinToLatestTimestamp } from "./OntologyIrEditsWinToLatestTimestamp.js";
import type { OntologyIrLatestTimestampToEditsWin } from "./OntologyIrLatestTimestampToEditsWin.js";
export interface OntologyIrUpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin {
	type: "latestTimestampToEditsWin";
	latestTimestampToEditsWin: OntologyIrLatestTimestampToEditsWin;
}
export interface OntologyIrUpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp {
	type: "editsWinToLatestTimestamp";
	editsWinToLatestTimestamp: OntologyIrEditsWinToLatestTimestamp;
}
/**
* Migration to communicate to Funnel that the edits resolution strategy for an object type has changed. Funnel
* will handle this accordingly by updating their internal patch structure.
*
* This migration is set internally and automatically by OMS and therefore should not be manually defined by
* users.
*/
export type OntologyIrUpdateEditsResolutionStrategyMigration = OntologyIrUpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin | OntologyIrUpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp;
