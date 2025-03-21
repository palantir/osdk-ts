import type { OntologyRid } from "../../OntologyRid.js";
import type { OntologyObjectTypeSemanticSearchStatus } from "./OntologyObjectTypeSemanticSearchStatus.js";
import type { SemanticSearchObjectTypeResponseEntry } from "./SemanticSearchObjectTypeResponseEntry.js";
export interface SemanticSearchObjectTypesResponse {
	results: Array<SemanticSearchObjectTypeResponseEntry>;
	ontologySemanticSearchStatuses: Record<OntologyRid, OntologyObjectTypeSemanticSearchStatus>;
}
