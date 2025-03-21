import type { ActivePropertyTypeStatus } from "./ActivePropertyTypeStatus.js";
import type { ExamplePropertyTypeStatus } from "./ExamplePropertyTypeStatus.js";
import type { ExperimentalPropertyTypeStatus } from "./ExperimentalPropertyTypeStatus.js";
import type { OntologyIrDeprecatedPropertyTypeStatus } from "./OntologyIrDeprecatedPropertyTypeStatus.js";
export interface OntologyIrPropertyTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalPropertyTypeStatus;
}
export interface OntologyIrPropertyTypeStatus_active {
	type: "active";
	active: ActivePropertyTypeStatus;
}
export interface OntologyIrPropertyTypeStatus_deprecated {
	type: "deprecated";
	deprecated: OntologyIrDeprecatedPropertyTypeStatus;
}
export interface OntologyIrPropertyTypeStatus_example {
	type: "example";
	example: ExamplePropertyTypeStatus;
}
/**
* The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
*/
export type OntologyIrPropertyTypeStatus = OntologyIrPropertyTypeStatus_experimental | OntologyIrPropertyTypeStatus_active | OntologyIrPropertyTypeStatus_deprecated | OntologyIrPropertyTypeStatus_example;
