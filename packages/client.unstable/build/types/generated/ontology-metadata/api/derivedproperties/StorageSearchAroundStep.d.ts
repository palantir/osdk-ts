import type { DerivedPropertyLinkTypeSide } from "./DerivedPropertyLinkTypeSide.js";
import type { StorageDerivedPropertyLinkTypeIdentifier } from "./StorageDerivedPropertyLinkTypeIdentifier.js";
export interface StorageSearchAroundStep {
	linkTypeIdentifier: StorageDerivedPropertyLinkTypeIdentifier;
	linkTypeSide: DerivedPropertyLinkTypeSide;
}
