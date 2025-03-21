import type { ColumnLocator } from "./ColumnLocator.js";
import type { FieldMetadata } from "./FieldMetadata.js";
import type { PropertyId } from "./PropertyId.js";
import type { PropertyTypeReference } from "./PropertyTypeReference.js";
/**
* Local property declaration.
*/
export interface PropertyWithoutRid {
	id: PropertyId;
	type: PropertyTypeReference;
	arrayNestingLevel: number | undefined;
	fieldMetadata: FieldMetadata | undefined;
	column: ColumnLocator;
	authorizationRid: string | undefined;
}
