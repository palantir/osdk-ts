import type { DerivedPropertyLinkTypeSide } from "./DerivedPropertyLinkTypeSide.js";
import type { StorageDerivedPropertyLinkTypeIdentifier } from "./StorageDerivedPropertyLinkTypeIdentifier.js";
export interface StorageLinkTypeLinkDefinition {
	linkTypeIdentifier: StorageDerivedPropertyLinkTypeIdentifier;
	linkTypeSide: DerivedPropertyLinkTypeSide | undefined;
}
