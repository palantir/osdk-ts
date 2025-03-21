import type { StoragePropertyTypeIdentifier } from "./StoragePropertyTypeIdentifier.js";
export interface StorageLinkedCollection {
	linkedProperty: StoragePropertyTypeIdentifier;
	limit: number;
}
