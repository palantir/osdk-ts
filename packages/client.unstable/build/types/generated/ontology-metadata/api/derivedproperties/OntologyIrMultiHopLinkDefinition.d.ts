import type { OntologyIrMultiHopStepDefinition } from "./OntologyIrMultiHopStepDefinition.js";
/**
* A link definition formed from sequentially traversing one or more multi hop steps.
*/
export interface OntologyIrMultiHopLinkDefinition {
	steps: Array<OntologyIrMultiHopStepDefinition>;
}
