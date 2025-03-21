import type { DatasourceRid } from "../DatasourceRid.js";
/**
* Migration to rename one datasource to another.
*/
export interface RenameDatasourceMigration {
	source: DatasourceRid;
	target: DatasourceRid;
}
