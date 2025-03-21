import type { ActiveInterfaceTypeStatus } from "./ActiveInterfaceTypeStatus.js";
import type { DeprecatedInterfaceTypeStatus } from "./DeprecatedInterfaceTypeStatus.js";
import type { ExampleInterfaceTypeStatus } from "./ExampleInterfaceTypeStatus.js";
import type { ExperimentalInterfaceTypeStatus } from "./ExperimentalInterfaceTypeStatus.js";
export interface InterfaceTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalInterfaceTypeStatus;
}
export interface InterfaceTypeStatus_active {
	type: "active";
	active: ActiveInterfaceTypeStatus;
}
export interface InterfaceTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedInterfaceTypeStatus;
}
export interface InterfaceTypeStatus_example {
	type: "example";
	example: ExampleInterfaceTypeStatus;
}
export type InterfaceTypeStatus = InterfaceTypeStatus_experimental | InterfaceTypeStatus_active | InterfaceTypeStatus_deprecated | InterfaceTypeStatus_example;
