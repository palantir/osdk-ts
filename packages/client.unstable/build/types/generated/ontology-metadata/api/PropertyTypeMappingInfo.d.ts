import type { ColumnName } from "./ColumnName.js";
import type { EditOnlyPropertyType } from "./EditOnlyPropertyType.js";
import type { StructFieldApiNameMapping } from "./StructFieldApiNameMapping.js";
export interface PropertyTypeMappingInfo_column {
	type: "column";
	column: ColumnName;
}
export interface PropertyTypeMappingInfo_editOnly {
	type: "editOnly";
	editOnly: EditOnlyPropertyType;
}
export interface PropertyTypeMappingInfo_struct {
	type: "struct";
	struct: StructFieldApiNameMapping;
}
/**
* This indicates whether the property type is backed by a dataset column, or is unbacked and hence an
* edit only property type.
*/
export type PropertyTypeMappingInfo = PropertyTypeMappingInfo_column | PropertyTypeMappingInfo_editOnly | PropertyTypeMappingInfo_struct;
