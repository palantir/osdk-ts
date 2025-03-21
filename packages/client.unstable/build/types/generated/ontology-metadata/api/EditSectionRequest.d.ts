import type { SectionContent } from "./SectionContent.js";
import type { SectionDisplayBlock } from "./SectionDisplayBlock.js";
import type { SectionDisplayMetadata } from "./SectionDisplayMetadata.js";
import type { SectionId } from "./SectionId.js";
/**
* Request to edit an existing Section
*/
export interface EditSectionRequest {
	id: SectionId;
	content: Array<SectionContent>;
	displayMetadata: SectionDisplayMetadata;
	validation: SectionDisplayBlock;
}
