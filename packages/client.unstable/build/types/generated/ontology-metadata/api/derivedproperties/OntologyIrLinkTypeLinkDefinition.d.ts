import type { DerivedPropertyLinkTypeSide } from "./DerivedPropertyLinkTypeSide.js";
import type { OntologyIrDerivedPropertyLinkTypeIdentifier } from "./OntologyIrDerivedPropertyLinkTypeIdentifier.js";
export interface OntologyIrLinkTypeLinkDefinition {
	linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
	linkTypeSide: DerivedPropertyLinkTypeSide;
}
