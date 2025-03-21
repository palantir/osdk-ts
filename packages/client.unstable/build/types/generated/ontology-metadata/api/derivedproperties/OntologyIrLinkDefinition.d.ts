import type { OntologyIrLinkTypeLinkDefinition } from "./OntologyIrLinkTypeLinkDefinition.js";
import type { OntologyIrMultiHopLinkDefinition } from "./OntologyIrMultiHopLinkDefinition.js";
export interface OntologyIrLinkDefinition_linkTypeLink {
	type: "linkTypeLink";
	linkTypeLink: OntologyIrLinkTypeLinkDefinition;
}
export interface OntologyIrLinkDefinition_multiHopLink {
	type: "multiHopLink";
	multiHopLink: OntologyIrMultiHopLinkDefinition;
}
export type OntologyIrLinkDefinition = OntologyIrLinkDefinition_linkTypeLink | OntologyIrLinkDefinition_multiHopLink;
