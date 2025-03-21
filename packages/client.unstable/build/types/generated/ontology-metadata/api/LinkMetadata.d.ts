import type { LinkType } from "./LinkType.js";
import type { SoftLink } from "./SoftLink.js";
export interface LinkMetadata_linkType {
	type: "linkType";
	linkType: LinkType;
}
export interface LinkMetadata_softLink {
	type: "softLink";
	softLink: SoftLink;
}
/**
* Representation of all types of links that can be traversed in the ontology
*/
export type LinkMetadata = LinkMetadata_linkType | LinkMetadata_softLink;
