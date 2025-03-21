import type { StorageLinkTypeLinkDefinition } from "./StorageLinkTypeLinkDefinition.js";
import type { StorageMultiHopLinkDefinition } from "./StorageMultiHopLinkDefinition.js";
export interface StorageLinkDefinition_linkTypeLink {
	type: "linkTypeLink";
	linkTypeLink: StorageLinkTypeLinkDefinition;
}
export interface StorageLinkDefinition_multiHopLink {
	type: "multiHopLink";
	multiHopLink: StorageMultiHopLinkDefinition;
}
export type StorageLinkDefinition = StorageLinkDefinition_linkTypeLink | StorageLinkDefinition_multiHopLink;
