import type { SectionHidden } from "./SectionHidden.js";
import type { SectionVisible } from "./SectionVisible.js";
export interface SectionVisibility_visible {
	type: "visible";
	visible: SectionVisible;
}
export interface SectionVisibility_hidden {
	type: "hidden";
	hidden: SectionHidden;
}
/**
* Specifies if the section is visible or hidden
*/
export type SectionVisibility = SectionVisibility_visible | SectionVisibility_hidden;
