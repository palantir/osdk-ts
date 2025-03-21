import type { OntologyIrGothamPropertyDatasourceMappingProperty } from "./OntologyIrGothamPropertyDatasourceMappingProperty.js";
import type { OntologyIrGothamPropertyDatasourceMappingStruct } from "./OntologyIrGothamPropertyDatasourceMappingStruct.js";
export interface OntologyIrGothamPropertyDatasourceMapping_property {
	type: "property";
	property: OntologyIrGothamPropertyDatasourceMappingProperty;
}
export interface OntologyIrGothamPropertyDatasourceMapping_struct {
	type: "struct";
	struct: OntologyIrGothamPropertyDatasourceMappingStruct;
}
export type OntologyIrGothamPropertyDatasourceMapping = OntologyIrGothamPropertyDatasourceMapping_property | OntologyIrGothamPropertyDatasourceMapping_struct;
