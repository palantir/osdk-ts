import type { SectionVisibilityOverride } from "./SectionVisibilityOverride.js";
export interface SectionDisplayBlockOverride_visibility {
	type: "visibility";
	visibility: SectionVisibilityOverride;
}
/**
* The display parameters for a section override
*/
export type SectionDisplayBlockOverride = SectionDisplayBlockOverride_visibility;
