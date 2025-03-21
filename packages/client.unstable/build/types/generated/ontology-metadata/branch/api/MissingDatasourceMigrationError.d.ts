import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* Note: This error does not block the branch from getting merged.
*
* Indicates that a datasource was deleted without the required schema migrations. Currently we only validate
* for the most common schema migrations. Validation only looks at migrations with
* `SourceSchemaVersion.latestVersion()`, other migrations will be ignored.
* There may be some edge cases not covered by this validation.
*
* Schema Migrations that are validated for include:
* - dropAllPatches
* - dropDatasource, where the source datasource matches the deleted datasource
* - renameDatasource, where the source matches the deleted datasource
*
* Edge cases include:
* - dropDatasource does not check that the target datasource exists or is valid
*/
export interface MissingDatasourceMigrationError {
	objectTypeRid: ObjectTypeRid;
	datasourceRid: DatasourceRid;
}
