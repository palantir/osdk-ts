import type { MultiHopStepDefinitionModification } from "./MultiHopStepDefinitionModification.js";
/**
* A link definition formed from sequentially traversing one or more multi hop steps.
*/
export interface MultiHopLinkDefinitionModification {
	steps: Array<MultiHopStepDefinitionModification>;
}
