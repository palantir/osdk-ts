import type { OntologyIrLinkTypeEntityMetadata } from "../entitymetadata/OntologyIrLinkTypeEntityMetadata.js";
import type { OntologyIrLinkType } from "../OntologyIrLinkType.js";
import type { OntologyIrManyToManyLinkTypeDatasource } from "../OntologyIrManyToManyLinkTypeDatasource.js";
export interface OntologyIrLinkTypeBlockDataV2 {
	linkType: OntologyIrLinkType;
	datasources: Array<OntologyIrManyToManyLinkTypeDatasource>;
	entityMetadata: OntologyIrLinkTypeEntityMetadata | undefined;
}
