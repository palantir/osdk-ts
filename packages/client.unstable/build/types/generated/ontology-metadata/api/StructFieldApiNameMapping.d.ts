import type { ColumnName } from "./ColumnName.js";
import type { NestedStructFieldApiNameMapping } from "./NestedStructFieldApiNameMapping.js";
import type { StructFieldName } from "./StructFieldName.js";
/**
* A mapping from the backing column struct field names to the struct property type field api names. Optionally
* allows specifying nested fields, although OMS will throw in practice since this is only to avoid an API break
* in the future if we want to support nested structs.
*/
export interface StructFieldApiNameMapping {
	column: ColumnName;
	mapping: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}
