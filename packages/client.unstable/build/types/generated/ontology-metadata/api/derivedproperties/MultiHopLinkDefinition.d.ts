import type { MultiHopStepDefinition } from "./MultiHopStepDefinition.js";
/**
* A link definition formed from sequentially traversing one or more multi hop steps.
*/
export interface MultiHopLinkDefinition {
	steps: Array<MultiHopStepDefinition>;
}
