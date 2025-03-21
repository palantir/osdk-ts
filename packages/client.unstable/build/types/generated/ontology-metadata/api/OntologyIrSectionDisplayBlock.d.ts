import type { OntologyIrSectionConditionalOverride } from "./OntologyIrSectionConditionalOverride.js";
import type { SectionValidationDisplayMetadata } from "./SectionValidationDisplayMetadata.js";
/**
* Contains information about the section display and any conditional overrides set on the section.
* If more than one conditional override is passed. The first one with a passing condition will take priority.
*/
export interface OntologyIrSectionDisplayBlock {
	conditionalOverrides: Array<OntologyIrSectionConditionalOverride>;
	defaultDisplayMetadata: SectionValidationDisplayMetadata;
}
