import type { DatasourceRid } from "./DatasourceRid.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { OntologyIrObjectTypeDatasourceDefinition } from "./OntologyIrObjectTypeDatasourceDefinition.js";
export interface OntologyIrObjectTypeDatasource {
	rid: DatasourceRid;
	datasource: OntologyIrObjectTypeDatasourceDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	redacted: boolean | undefined;
}
