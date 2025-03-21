import type { InitializePatchesMigration } from "./InitializePatchesMigration.js";
import type { PermanentlyDeletePatchesMigration } from "./PermanentlyDeletePatchesMigration.js";
export interface NonRevertibleMigration_initializePatches {
	type: "initializePatches";
	initializePatches: InitializePatchesMigration;
}
export interface NonRevertibleMigration_permanentlyDeletePatches {
	type: "permanentlyDeletePatches";
	permanentlyDeletePatches: PermanentlyDeletePatchesMigration;
}
/**
* Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
*/
export type NonRevertibleMigration = NonRevertibleMigration_initializePatches | NonRevertibleMigration_permanentlyDeletePatches;
