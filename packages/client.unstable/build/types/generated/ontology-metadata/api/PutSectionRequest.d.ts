import type { SectionContent } from "./SectionContent.js";
import type { SectionDisplayBlock } from "./SectionDisplayBlock.js";
import type { SectionDisplayMetadata } from "./SectionDisplayMetadata.js";
/**
* A PutSectionRequest is used to create or modify Sections.
*/
export interface PutSectionRequest {
	content: Array<SectionContent>;
	displayMetadata: SectionDisplayMetadata;
	validation: SectionDisplayBlock;
}
