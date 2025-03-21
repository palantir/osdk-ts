import type { Empty } from "./Empty.js";
export interface SectionStyle_box {
	type: "box";
	box: Empty;
}
export interface SectionStyle_minimal {
	type: "minimal";
	minimal: Empty;
}
/**
* Visual rendering style of the Section within an Action Form
*/
export type SectionStyle = SectionStyle_box | SectionStyle_minimal;
