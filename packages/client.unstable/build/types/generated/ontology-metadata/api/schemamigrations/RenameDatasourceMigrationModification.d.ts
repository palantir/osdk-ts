import type { DatasourceIdentifier } from "../DatasourceIdentifier.js";
import type { DatasourceRid } from "../DatasourceRid.js";
/**
* Migration to rename one datasource to another.
*/
export interface RenameDatasourceMigrationModification {
	source: DatasourceRid;
	target: DatasourceIdentifier;
}
