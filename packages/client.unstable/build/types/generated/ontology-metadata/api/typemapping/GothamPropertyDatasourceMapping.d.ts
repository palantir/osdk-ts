import type { GothamPropertyDatasourceMappingProperty } from "./GothamPropertyDatasourceMappingProperty.js";
import type { GothamPropertyDatasourceMappingStruct } from "./GothamPropertyDatasourceMappingStruct.js";
export interface GothamPropertyDatasourceMapping_property {
	type: "property";
	property: GothamPropertyDatasourceMappingProperty;
}
export interface GothamPropertyDatasourceMapping_struct {
	type: "struct";
	struct: GothamPropertyDatasourceMappingStruct;
}
export type GothamPropertyDatasourceMapping = GothamPropertyDatasourceMapping_property | GothamPropertyDatasourceMapping_struct;
