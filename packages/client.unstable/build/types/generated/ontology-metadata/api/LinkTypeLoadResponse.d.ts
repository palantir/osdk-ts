import type { LinkTypeEntityMetadata } from "./entitymetadata/LinkTypeEntityMetadata.js";
import type { LinkType } from "./LinkType.js";
import type { ManyToManyLinkTypeDatasource } from "./ManyToManyLinkTypeDatasource.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Response to LinkTypeLoadRequest.
*/
export interface LinkTypeLoadResponse {
	linkType: LinkType;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
	datasources: Array<ManyToManyLinkTypeDatasource>;
	entityMetadata: LinkTypeEntityMetadata | undefined;
}
