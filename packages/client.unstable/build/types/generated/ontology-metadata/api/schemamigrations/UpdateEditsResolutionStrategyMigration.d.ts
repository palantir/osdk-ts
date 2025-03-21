import type { EditsWinToLatestTimestamp } from "./EditsWinToLatestTimestamp.js";
import type { LatestTimestampToEditsWin } from "./LatestTimestampToEditsWin.js";
export interface UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin {
	type: "latestTimestampToEditsWin";
	latestTimestampToEditsWin: LatestTimestampToEditsWin;
}
export interface UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp {
	type: "editsWinToLatestTimestamp";
	editsWinToLatestTimestamp: EditsWinToLatestTimestamp;
}
/**
* Migration to communicate to Funnel that the edits resolution strategy for an object type has changed. Funnel
* will handle this accordingly by updating their internal patch structure.
*
* This migration is set internally and automatically by OMS and therefore should not be manually defined by
* users.
*/
export type UpdateEditsResolutionStrategyMigration = UpdateEditsResolutionStrategyMigration_latestTimestampToEditsWin | UpdateEditsResolutionStrategyMigration_editsWinToLatestTimestamp;
