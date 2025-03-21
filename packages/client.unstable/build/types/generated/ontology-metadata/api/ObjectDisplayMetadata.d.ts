import type { IconReference } from "./IconReference.js";
import type { Visibility } from "./Visibility.js";
export interface ObjectDisplayMetadata {
	displayName: string | undefined;
	visibility: Visibility | undefined;
	icon: IconReference | undefined;
	pluralDisplayName: string | undefined;
	groupDisplayName: string | undefined;
}
