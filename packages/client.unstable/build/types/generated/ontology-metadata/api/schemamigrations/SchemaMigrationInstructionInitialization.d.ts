import type { InitializePatchesMigrationModification } from "./InitializePatchesMigrationModification.js";
export interface SchemaMigrationInstructionInitialization_initializePatches {
	type: "initializePatches";
	initializePatches: InitializePatchesMigrationModification;
}
/**
* Schema migration instruction that can be specified at the time of object types creation.
*/
export type SchemaMigrationInstructionInitialization = SchemaMigrationInstructionInitialization_initializePatches;
