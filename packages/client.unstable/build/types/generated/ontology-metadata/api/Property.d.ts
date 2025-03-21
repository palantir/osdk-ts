import type { ColumnLocator } from "./ColumnLocator.js";
import type { FieldMetadata } from "./FieldMetadata.js";
import type { PropertyId } from "./PropertyId.js";
import type { PropertyTypeReference } from "./PropertyTypeReference.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Local property declaration.
*/
export interface Property {
	id: PropertyId;
	type: PropertyTypeReference;
	fieldMetadata: FieldMetadata | undefined;
	column: ColumnLocator;
	authorizationRid: string | undefined;
	rid: PropertyTypeRid;
}
