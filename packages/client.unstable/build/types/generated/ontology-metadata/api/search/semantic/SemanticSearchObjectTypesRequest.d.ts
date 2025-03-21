import type { OntologyRid } from "../../OntologyRid.js";
export interface SemanticSearchObjectTypesRequest {
	prompt: string;
	pageLimit: number;
	ontologyRids: Array<OntologyRid>;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
