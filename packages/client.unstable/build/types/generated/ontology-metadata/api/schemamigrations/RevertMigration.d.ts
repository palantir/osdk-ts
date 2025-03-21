import type { SchemaMigrationRid } from "../SchemaMigrationRid.js";
/**
* Revert a previous migration.
*/
export interface RevertMigration {
	revert: SchemaMigrationRid;
}
