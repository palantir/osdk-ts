import type { DatasourceRid } from "../DatasourceRid.js";
import type { EditsConfiguration } from "../EditsConfiguration.js";
import type { ManyToManyLinkTypeDatasourceModificationDefinition } from "./ManyToManyLinkTypeDatasourceModificationDefinition.js";
export interface ManyToManyLinkTypeDatasourceUpdate {
	rid: DatasourceRid;
	manyToManyLinkTypeDatasourceDefinition: ManyToManyLinkTypeDatasourceModificationDefinition;
	editsConfiguration: EditsConfiguration | undefined;
}
