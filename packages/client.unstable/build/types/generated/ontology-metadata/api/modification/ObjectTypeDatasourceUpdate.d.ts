import type { DataSecurity } from "../DataSecurity.js";
import type { DatasourceRid } from "../DatasourceRid.js";
import type { EditsConfiguration } from "../EditsConfiguration.js";
import type { ObjectTypeDatasourceModificationDefinition } from "./ObjectTypeDatasourceModificationDefinition.js";
export interface ObjectTypeDatasourceUpdate {
	rid: DatasourceRid;
	objectTypeDatasourceDefinition: ObjectTypeDatasourceModificationDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	dataSecurity: DataSecurity | undefined;
}
