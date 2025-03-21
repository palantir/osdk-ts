import type { DatasourceRid } from "./DatasourceRid.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { OntologyIrManyToManyLinkTypeDatasourceDefinition } from "./OntologyIrManyToManyLinkTypeDatasourceDefinition.js";
export interface OntologyIrManyToManyLinkTypeDatasource {
	rid: DatasourceRid;
	datasource: OntologyIrManyToManyLinkTypeDatasourceDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	redacted: boolean | undefined;
}
