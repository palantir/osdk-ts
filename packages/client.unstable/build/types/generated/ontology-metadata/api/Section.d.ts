import type { SectionContent } from "./SectionContent.js";
import type { SectionDisplayMetadata } from "./SectionDisplayMetadata.js";
import type { SectionId } from "./SectionId.js";
import type { SectionRid } from "./SectionRid.js";
/**
* A physical and logical grouping of parameters on the action form.
*/
export interface Section {
	id: SectionId;
	rid: SectionRid;
	content: Array<SectionContent>;
	displayMetadata: SectionDisplayMetadata;
}
