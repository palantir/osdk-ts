import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
/**
* A URL target for a Foundry rid with query params.
*/
export interface OntologyIrRidUrlTarget {
	rid: OntologyIrLogicRuleValue;
	queryParams: Record<string, OntologyIrLogicRuleValue>;
}
