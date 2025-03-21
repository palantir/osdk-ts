import type { OntologyIrInitializePatchesMigration } from "./OntologyIrInitializePatchesMigration.js";
import type { PermanentlyDeletePatchesMigration } from "./PermanentlyDeletePatchesMigration.js";
export interface OntologyIrNonRevertibleMigration_initializePatches {
	type: "initializePatches";
	initializePatches: OntologyIrInitializePatchesMigration;
}
export interface OntologyIrNonRevertibleMigration_permanentlyDeletePatches {
	type: "permanentlyDeletePatches";
	permanentlyDeletePatches: PermanentlyDeletePatchesMigration;
}
/**
* Migration that cannot be reverted in future, this migration type implies that all migrations before it will be checkpointed.
*/
export type OntologyIrNonRevertibleMigration = OntologyIrNonRevertibleMigration_initializePatches | OntologyIrNonRevertibleMigration_permanentlyDeletePatches;
