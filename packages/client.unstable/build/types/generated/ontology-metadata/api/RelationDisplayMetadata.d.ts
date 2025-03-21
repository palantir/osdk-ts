import type { TypeClass } from "./TypeClass.js";
import type { Visibility } from "./Visibility.js";
export interface RelationDisplayMetadata {
	displayName: string | undefined;
	visibility: Visibility | undefined;
	typeclasses: Array<TypeClass>;
	pluralDisplayName: string | undefined;
	groupDisplayName: string | undefined;
}
