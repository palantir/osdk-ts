import type { Icon } from "./Icon.js";
import type { Visibility } from "./Visibility.js";
/**
* This includes metadata which can be used by front-ends when displaying the ObjectType.
*/
export interface ObjectTypeDisplayMetadata {
	description: string | undefined;
	displayName: string;
	groupDisplayName: string | undefined;
	icon: Icon;
	pluralDisplayName: string;
	visibility: Visibility;
}
