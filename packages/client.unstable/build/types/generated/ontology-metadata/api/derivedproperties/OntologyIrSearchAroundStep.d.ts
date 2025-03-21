import type { DerivedPropertyLinkTypeSide } from "./DerivedPropertyLinkTypeSide.js";
import type { OntologyIrDerivedPropertyLinkTypeIdentifier } from "./OntologyIrDerivedPropertyLinkTypeIdentifier.js";
export interface OntologyIrSearchAroundStep {
	linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
	linkTypeSide: DerivedPropertyLinkTypeSide;
}
