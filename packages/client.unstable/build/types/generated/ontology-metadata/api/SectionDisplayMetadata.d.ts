import type { SectionStyle } from "./SectionStyle.js";
/**
* Additional Section Metadata. This is used in rendering the section display.
*/
export interface SectionDisplayMetadata {
	displayName: string;
	description: string;
	columnCount: number;
	showTitleBar: boolean;
	collapsedByDefault: boolean;
	style: SectionStyle | undefined;
}
