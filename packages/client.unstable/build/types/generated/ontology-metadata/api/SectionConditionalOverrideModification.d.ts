import type { ConditionModification } from "./ConditionModification.js";
import type { SectionDisplayBlockOverride } from "./SectionDisplayBlockOverride.js";
/**
* This block contains a conditional override for a section.
* This includes the condition to test and the new display parameters to use if the condition passes.
*/
export interface SectionConditionalOverrideModification {
	condition: ConditionModification;
	sectionBlockOverrides: Array<SectionDisplayBlockOverride>;
}
