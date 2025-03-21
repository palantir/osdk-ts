import type { SearchAroundStep } from "./SearchAroundStep.js";
export interface MultiHopStepDefinition_searchAround {
	type: "searchAround";
	searchAround: SearchAroundStep;
}
export type MultiHopStepDefinition = MultiHopStepDefinition_searchAround;
