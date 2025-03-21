import type { InitializePatchesMigrationModification } from "./InitializePatchesMigrationModification.js";
import type { PermanentlyDeletePatchesMigrationModification } from "./PermanentlyDeletePatchesMigrationModification.js";
export interface NonRevertibleMigrationModification_initializePatches {
	type: "initializePatches";
	initializePatches: InitializePatchesMigrationModification;
}
export interface NonRevertibleMigrationModification_permanentlyDeletePatches {
	type: "permanentlyDeletePatches";
	permanentlyDeletePatches: PermanentlyDeletePatchesMigrationModification;
}
/**
* Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
*/
export type NonRevertibleMigrationModification = NonRevertibleMigrationModification_initializePatches | NonRevertibleMigrationModification_permanentlyDeletePatches;
