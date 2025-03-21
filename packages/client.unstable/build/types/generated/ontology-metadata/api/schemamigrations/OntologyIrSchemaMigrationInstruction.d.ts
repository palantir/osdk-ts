import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { OntologyIrCastMigration } from "./OntologyIrCastMigration.js";
import type { OntologyIrDropPropertyMigration } from "./OntologyIrDropPropertyMigration.js";
import type { OntologyIrNonRevertibleMigration } from "./OntologyIrNonRevertibleMigration.js";
import type { OntologyIrRenamePropertyMigration } from "./OntologyIrRenamePropertyMigration.js";
import type { OntologyIrUpdateEditsResolutionStrategyMigration } from "./OntologyIrUpdateEditsResolutionStrategyMigration.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
import type { RevertMigration } from "./RevertMigration.js";
export interface OntologyIrSchemaMigrationInstruction_dropProperty {
	type: "dropProperty";
	dropProperty: OntologyIrDropPropertyMigration;
}
export interface OntologyIrSchemaMigrationInstruction_dropDatasource {
	type: "dropDatasource";
	dropDatasource: DropDatasourceMigration;
}
export interface OntologyIrSchemaMigrationInstruction_dropAllPatches {
	type: "dropAllPatches";
	dropAllPatches: DropAllPatchesMigration;
}
export interface OntologyIrSchemaMigrationInstruction_renameDatasource {
	type: "renameDatasource";
	renameDatasource: RenameDatasourceMigration;
}
export interface OntologyIrSchemaMigrationInstruction_renameProperty {
	type: "renameProperty";
	renameProperty: OntologyIrRenamePropertyMigration;
}
export interface OntologyIrSchemaMigrationInstruction_cast {
	type: "cast";
	cast: OntologyIrCastMigration;
}
export interface OntologyIrSchemaMigrationInstruction_revert {
	type: "revert";
	revert: RevertMigration;
}
export interface OntologyIrSchemaMigrationInstruction_nonRevertible {
	type: "nonRevertible";
	nonRevertible: OntologyIrNonRevertibleMigration;
}
export interface OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy {
	type: "updateEditsResolutionStrategy";
	updateEditsResolutionStrategy: OntologyIrUpdateEditsResolutionStrategyMigration;
}
/**
* One out of potentially many instructions on how to transition from one version to another.
*/
export type OntologyIrSchemaMigrationInstruction = OntologyIrSchemaMigrationInstruction_dropProperty | OntologyIrSchemaMigrationInstruction_dropDatasource | OntologyIrSchemaMigrationInstruction_dropAllPatches | OntologyIrSchemaMigrationInstruction_renameDatasource | OntologyIrSchemaMigrationInstruction_renameProperty | OntologyIrSchemaMigrationInstruction_cast | OntologyIrSchemaMigrationInstruction_revert | OntologyIrSchemaMigrationInstruction_nonRevertible | OntologyIrSchemaMigrationInstruction_updateEditsResolutionStrategy;
