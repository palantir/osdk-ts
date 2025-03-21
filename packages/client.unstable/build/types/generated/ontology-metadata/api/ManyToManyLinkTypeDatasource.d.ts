import type { DatasourceRid } from "./DatasourceRid.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ManyToManyLinkTypeDatasourceDefinition } from "./ManyToManyLinkTypeDatasourceDefinition.js";
export interface ManyToManyLinkTypeDatasource {
	rid: DatasourceRid;
	datasource: ManyToManyLinkTypeDatasourceDefinition;
	editsConfiguration: EditsConfiguration | undefined;
	redacted: boolean | undefined;
}
