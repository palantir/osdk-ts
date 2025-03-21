import type { DataSecurity } from "./DataSecurity.js";
import type { DatasourceRid } from "./DatasourceRid.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ObjectTypeDatasourceDefinition } from "./ObjectTypeDatasourceDefinition.js";
export interface ObjectTypeDatasource {
	rid: DatasourceRid;
	datasource: ObjectTypeDatasourceDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	redacted: boolean | undefined;
	dataSecurity: DataSecurity | undefined;
}
