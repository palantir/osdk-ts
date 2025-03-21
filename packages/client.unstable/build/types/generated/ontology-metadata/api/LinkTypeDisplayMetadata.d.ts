import type { Visibility } from "./Visibility.js";
export interface LinkTypeDisplayMetadata {
	displayName: string;
	groupDisplayName: string | undefined;
	pluralDisplayName: string;
	visibility: Visibility;
}
