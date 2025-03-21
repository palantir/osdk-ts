import type { CastMigrationModification } from "./CastMigrationModification.js";
import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { DropPropertyMigration } from "./DropPropertyMigration.js";
import type { NonRevertibleMigrationModification } from "./NonRevertibleMigrationModification.js";
import type { RenameDatasourceMigrationModification } from "./RenameDatasourceMigrationModification.js";
import type { RenamePropertyMigrationModification } from "./RenamePropertyMigrationModification.js";
import type { RevertMigration } from "./RevertMigration.js";
import type { UpdateEditsResolutionStrategyMigration } from "./UpdateEditsResolutionStrategyMigration.js";
export interface SchemaMigrationInstructionModification_dropProperty {
	type: "dropProperty";
	dropProperty: DropPropertyMigration;
}
export interface SchemaMigrationInstructionModification_dropDatasource {
	type: "dropDatasource";
	dropDatasource: DropDatasourceMigration;
}
export interface SchemaMigrationInstructionModification_dropAllPatches {
	type: "dropAllPatches";
	dropAllPatches: DropAllPatchesMigration;
}
export interface SchemaMigrationInstructionModification_renameDatasource {
	type: "renameDatasource";
	renameDatasource: RenameDatasourceMigrationModification;
}
export interface SchemaMigrationInstructionModification_renameProperty {
	type: "renameProperty";
	renameProperty: RenamePropertyMigrationModification;
}
export interface SchemaMigrationInstructionModification_cast {
	type: "cast";
	cast: CastMigrationModification;
}
export interface SchemaMigrationInstructionModification_revert {
	type: "revert";
	revert: RevertMigration;
}
export interface SchemaMigrationInstructionModification_nonRevertible {
	type: "nonRevertible";
	nonRevertible: NonRevertibleMigrationModification;
}
export interface SchemaMigrationInstructionModification_updateEditsResolutionStrategy {
	type: "updateEditsResolutionStrategy";
	updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}
/**
* One out of potentially many instructions on how to transition from one version to another.
*/
export type SchemaMigrationInstructionModification = SchemaMigrationInstructionModification_dropProperty | SchemaMigrationInstructionModification_dropDatasource | SchemaMigrationInstructionModification_dropAllPatches | SchemaMigrationInstructionModification_renameDatasource | SchemaMigrationInstructionModification_renameProperty | SchemaMigrationInstructionModification_cast | SchemaMigrationInstructionModification_revert | SchemaMigrationInstructionModification_nonRevertible | SchemaMigrationInstructionModification_updateEditsResolutionStrategy;
