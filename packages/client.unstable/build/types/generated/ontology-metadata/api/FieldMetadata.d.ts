import type { FieldDisplayMetadata } from "./FieldDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
/**
* General class for capturing column, local property, and global property common field metadata
*/
export interface FieldMetadata {
	displayMetadata: FieldDisplayMetadata | undefined;
	typeclasses: Array<TypeClass>;
	description: string | undefined;
	metadata: Record<string, any | undefined>;
}
