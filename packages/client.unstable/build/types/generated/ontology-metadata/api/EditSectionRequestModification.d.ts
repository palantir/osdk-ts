import type { SectionContent } from "./SectionContent.js";
import type { SectionDisplayBlockModification } from "./SectionDisplayBlockModification.js";
import type { SectionDisplayMetadata } from "./SectionDisplayMetadata.js";
import type { SectionId } from "./SectionId.js";
/**
* Request to edit an existing Section
*/
export interface EditSectionRequestModification {
	id: SectionId;
	content: Array<SectionContent>;
	displayMetadata: SectionDisplayMetadata;
	validation: SectionDisplayBlockModification;
}
