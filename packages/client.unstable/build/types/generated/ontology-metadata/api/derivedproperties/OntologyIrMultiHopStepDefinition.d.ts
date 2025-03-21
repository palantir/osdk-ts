import type { OntologyIrSearchAroundStep } from "./OntologyIrSearchAroundStep.js";
export interface OntologyIrMultiHopStepDefinition_searchAround {
	type: "searchAround";
	searchAround: OntologyIrSearchAroundStep;
}
export type OntologyIrMultiHopStepDefinition = OntologyIrMultiHopStepDefinition_searchAround;
