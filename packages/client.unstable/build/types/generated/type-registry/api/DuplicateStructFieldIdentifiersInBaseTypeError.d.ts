import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";
/**
* A StructV2 base type contains more than one StructElementV2 with the same StructFieldIdentifier.
*/
export interface DuplicateStructFieldIdentifiersInBaseTypeError {
	duplicateFieldIdentifiers: Array<StructFieldIdentifier>;
}
