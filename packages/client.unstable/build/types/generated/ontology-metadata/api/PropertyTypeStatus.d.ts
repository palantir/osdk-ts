import type { ActivePropertyTypeStatus } from "./ActivePropertyTypeStatus.js";
import type { DeprecatedPropertyTypeStatus } from "./DeprecatedPropertyTypeStatus.js";
import type { ExamplePropertyTypeStatus } from "./ExamplePropertyTypeStatus.js";
import type { ExperimentalPropertyTypeStatus } from "./ExperimentalPropertyTypeStatus.js";
export interface PropertyTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalPropertyTypeStatus;
}
export interface PropertyTypeStatus_active {
	type: "active";
	active: ActivePropertyTypeStatus;
}
export interface PropertyTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedPropertyTypeStatus;
}
export interface PropertyTypeStatus_example {
	type: "example";
	example: ExamplePropertyTypeStatus;
}
/**
* The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
*/
export type PropertyTypeStatus = PropertyTypeStatus_experimental | PropertyTypeStatus_active | PropertyTypeStatus_deprecated | PropertyTypeStatus_example;
