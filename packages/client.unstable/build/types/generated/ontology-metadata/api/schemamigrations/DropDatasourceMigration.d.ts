import type { DatasourceRid } from "../DatasourceRid.js";
/**
* Migration to drop the given datasource.
*/
export interface DropDatasourceMigration {
	datasource: DatasourceRid;
}
