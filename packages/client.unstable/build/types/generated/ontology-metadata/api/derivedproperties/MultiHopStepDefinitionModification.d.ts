import type { SearchAroundStepModification } from "./SearchAroundStepModification.js";
export interface MultiHopStepDefinitionModification_searchAround {
	type: "searchAround";
	searchAround: SearchAroundStepModification;
}
export type MultiHopStepDefinitionModification = MultiHopStepDefinitionModification_searchAround;
