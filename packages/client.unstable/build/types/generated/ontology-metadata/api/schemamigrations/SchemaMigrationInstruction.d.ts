import type { CastMigration } from "./CastMigration.js";
import type { DropAllPatchesMigration } from "./DropAllPatchesMigration.js";
import type { DropDatasourceMigration } from "./DropDatasourceMigration.js";
import type { DropPropertyMigration } from "./DropPropertyMigration.js";
import type { NonRevertibleMigration } from "./NonRevertibleMigration.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
import type { RenamePropertyMigration } from "./RenamePropertyMigration.js";
import type { RevertMigration } from "./RevertMigration.js";
import type { UpdateEditsResolutionStrategyMigration } from "./UpdateEditsResolutionStrategyMigration.js";
export interface SchemaMigrationInstruction_dropProperty {
	type: "dropProperty";
	dropProperty: DropPropertyMigration;
}
export interface SchemaMigrationInstruction_dropDatasource {
	type: "dropDatasource";
	dropDatasource: DropDatasourceMigration;
}
export interface SchemaMigrationInstruction_dropAllPatches {
	type: "dropAllPatches";
	dropAllPatches: DropAllPatchesMigration;
}
export interface SchemaMigrationInstruction_renameDatasource {
	type: "renameDatasource";
	renameDatasource: RenameDatasourceMigration;
}
export interface SchemaMigrationInstruction_renameProperty {
	type: "renameProperty";
	renameProperty: RenamePropertyMigration;
}
export interface SchemaMigrationInstruction_cast {
	type: "cast";
	cast: CastMigration;
}
export interface SchemaMigrationInstruction_revert {
	type: "revert";
	revert: RevertMigration;
}
export interface SchemaMigrationInstruction_nonRevertible {
	type: "nonRevertible";
	nonRevertible: NonRevertibleMigration;
}
export interface SchemaMigrationInstruction_updateEditsResolutionStrategy {
	type: "updateEditsResolutionStrategy";
	updateEditsResolutionStrategy: UpdateEditsResolutionStrategyMigration;
}
/**
* One out of potentially many instructions on how to transition from one version to another.
*/
export type SchemaMigrationInstruction = SchemaMigrationInstruction_dropProperty | SchemaMigrationInstruction_dropDatasource | SchemaMigrationInstruction_dropAllPatches | SchemaMigrationInstruction_renameDatasource | SchemaMigrationInstruction_renameProperty | SchemaMigrationInstruction_cast | SchemaMigrationInstruction_revert | SchemaMigrationInstruction_nonRevertible | SchemaMigrationInstruction_updateEditsResolutionStrategy;
