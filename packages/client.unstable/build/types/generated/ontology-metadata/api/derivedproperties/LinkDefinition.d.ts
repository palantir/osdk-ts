import type { LinkTypeLinkDefinition } from "./LinkTypeLinkDefinition.js";
import type { MultiHopLinkDefinition } from "./MultiHopLinkDefinition.js";
export interface LinkDefinition_linkTypeLink {
	type: "linkTypeLink";
	linkTypeLink: LinkTypeLinkDefinition;
}
export interface LinkDefinition_multiHopLink {
	type: "multiHopLink";
	multiHopLink: MultiHopLinkDefinition;
}
export type LinkDefinition = LinkDefinition_linkTypeLink | LinkDefinition_multiHopLink;
