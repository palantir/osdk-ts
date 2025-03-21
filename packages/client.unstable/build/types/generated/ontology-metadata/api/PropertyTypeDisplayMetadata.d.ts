import type { Visibility } from "./Visibility.js";
/**
* This includes metadata which can be used by front-ends when displaying the PropertyType.
*/
export interface PropertyTypeDisplayMetadata {
	description: string | undefined;
	displayName: string;
	visibility: Visibility;
}
