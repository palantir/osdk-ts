import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
/**
* Contains a non-empty MarkingList Value that represent the max classification of this parameter.
* It must be present and must contain a valid set of cbac markings.
*/
export interface OntologyIrParameterCbacConstraint {
	markingsValue: OntologyIrConditionValue | undefined;
}
