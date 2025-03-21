import type { ActiveInterfaceTypeStatus } from "./ActiveInterfaceTypeStatus.js";
import type { ExampleInterfaceTypeStatus } from "./ExampleInterfaceTypeStatus.js";
import type { ExperimentalInterfaceTypeStatus } from "./ExperimentalInterfaceTypeStatus.js";
import type { OntologyIrDeprecatedInterfaceTypeStatus } from "./OntologyIrDeprecatedInterfaceTypeStatus.js";
export interface OntologyIrInterfaceTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalInterfaceTypeStatus;
}
export interface OntologyIrInterfaceTypeStatus_active {
	type: "active";
	active: ActiveInterfaceTypeStatus;
}
export interface OntologyIrInterfaceTypeStatus_deprecated {
	type: "deprecated";
	deprecated: OntologyIrDeprecatedInterfaceTypeStatus;
}
export interface OntologyIrInterfaceTypeStatus_example {
	type: "example";
	example: ExampleInterfaceTypeStatus;
}
export type OntologyIrInterfaceTypeStatus = OntologyIrInterfaceTypeStatus_experimental | OntologyIrInterfaceTypeStatus_active | OntologyIrInterfaceTypeStatus_deprecated | OntologyIrInterfaceTypeStatus_example;
