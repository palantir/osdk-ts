import type { DerivedPropertyLinkTypeIdentifierInRequest } from "./DerivedPropertyLinkTypeIdentifierInRequest.js";
import type { DerivedPropertyLinkTypeSide } from "./DerivedPropertyLinkTypeSide.js";
export interface SearchAroundStepModification {
	linkTypeIdentifier: DerivedPropertyLinkTypeIdentifierInRequest;
	linkTypeSide: DerivedPropertyLinkTypeSide | undefined;
}
