import type { StorageSearchAroundStep } from "./StorageSearchAroundStep.js";
export interface StorageMultiHopStepDefinition_searchAround {
	type: "searchAround";
	searchAround: StorageSearchAroundStep;
}
export type StorageMultiHopStepDefinition = StorageMultiHopStepDefinition_searchAround;
