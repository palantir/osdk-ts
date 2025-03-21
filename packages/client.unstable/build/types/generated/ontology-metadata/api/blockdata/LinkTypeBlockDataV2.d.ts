import type { LinkTypeEntityMetadata } from "../entitymetadata/LinkTypeEntityMetadata.js";
import type { LinkType } from "../LinkType.js";
import type { ManyToManyLinkTypeDatasource } from "../ManyToManyLinkTypeDatasource.js";
export interface LinkTypeBlockDataV2 {
	linkType: LinkType;
	datasources: Array<ManyToManyLinkTypeDatasource>;
	entityMetadata: LinkTypeEntityMetadata | undefined;
}
