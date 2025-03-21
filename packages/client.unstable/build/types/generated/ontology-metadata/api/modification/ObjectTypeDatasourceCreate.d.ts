import type { DataSecurity } from "../DataSecurity.js";
import type { EditsConfiguration } from "../EditsConfiguration.js";
import type { ObjectTypeDatasourceModificationDefinition } from "./ObjectTypeDatasourceModificationDefinition.js";
export interface ObjectTypeDatasourceCreate {
	objectTypeDatasourceDefinition: ObjectTypeDatasourceModificationDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	dataSecurity: DataSecurity | undefined;
}
