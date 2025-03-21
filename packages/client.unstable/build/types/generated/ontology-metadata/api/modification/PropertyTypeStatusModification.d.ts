import type { ActivePropertyTypeStatusModification } from "./ActivePropertyTypeStatusModification.js";
import type { DeprecatedPropertyTypeStatusModification } from "./DeprecatedPropertyTypeStatusModification.js";
import type { ExamplePropertyTypeStatusModification } from "./ExamplePropertyTypeStatusModification.js";
import type { ExperimentalPropertyTypeStatusModification } from "./ExperimentalPropertyTypeStatusModification.js";
export interface PropertyTypeStatusModification_experimental {
	type: "experimental";
	experimental: ExperimentalPropertyTypeStatusModification;
}
export interface PropertyTypeStatusModification_active {
	type: "active";
	active: ActivePropertyTypeStatusModification;
}
export interface PropertyTypeStatusModification_deprecated {
	type: "deprecated";
	deprecated: DeprecatedPropertyTypeStatusModification;
}
export interface PropertyTypeStatusModification_example {
	type: "example";
	example: ExamplePropertyTypeStatusModification;
}
/**
* The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
*/
export type PropertyTypeStatusModification = PropertyTypeStatusModification_experimental | PropertyTypeStatusModification_active | PropertyTypeStatusModification_deprecated | PropertyTypeStatusModification_example;
