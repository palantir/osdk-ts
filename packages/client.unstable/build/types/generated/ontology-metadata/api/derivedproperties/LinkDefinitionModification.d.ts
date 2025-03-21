import type { LinkTypeLinkDefinitionModification } from "./LinkTypeLinkDefinitionModification.js";
import type { MultiHopLinkDefinitionModification } from "./MultiHopLinkDefinitionModification.js";
export interface LinkDefinitionModification_linkTypeLink {
	type: "linkTypeLink";
	linkTypeLink: LinkTypeLinkDefinitionModification;
}
export interface LinkDefinitionModification_multiHopLink {
	type: "multiHopLink";
	multiHopLink: MultiHopLinkDefinitionModification;
}
export type LinkDefinitionModification = LinkDefinitionModification_linkTypeLink | LinkDefinitionModification_multiHopLink;
