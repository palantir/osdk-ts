import type { SectionContent } from "./SectionContent.js";
import type { SectionDisplayBlockModification } from "./SectionDisplayBlockModification.js";
import type { SectionDisplayMetadata } from "./SectionDisplayMetadata.js";
/**
* A PutSectionRequest is used to create or modify Sections.
*/
export interface PutSectionRequestModification {
	content: Array<SectionContent>;
	displayMetadata: SectionDisplayMetadata;
	validation: SectionDisplayBlockModification;
}
