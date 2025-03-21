import type { EditsConfiguration } from "../EditsConfiguration.js";
import type { ManyToManyLinkTypeDatasourceModificationDefinition } from "./ManyToManyLinkTypeDatasourceModificationDefinition.js";
export interface ManyToManyLinkTypeDatasourceCreate {
	manyToManyLinkTypeDatasourceDefinition: ManyToManyLinkTypeDatasourceModificationDefinition;
	editsConfiguration: EditsConfiguration | undefined;
}
