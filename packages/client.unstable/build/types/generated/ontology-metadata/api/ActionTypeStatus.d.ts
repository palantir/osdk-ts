import type { ActiveActionTypeStatus } from "./ActiveActionTypeStatus.js";
import type { DeprecatedActionTypeStatus } from "./DeprecatedActionTypeStatus.js";
import type { ExampleActionTypeStatus } from "./ExampleActionTypeStatus.js";
import type { ExperimentalActionTypeStatus } from "./ExperimentalActionTypeStatus.js";
export interface ActionTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalActionTypeStatus;
}
export interface ActionTypeStatus_active {
	type: "active";
	active: ActiveActionTypeStatus;
}
export interface ActionTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedActionTypeStatus;
}
export interface ActionTypeStatus_example {
	type: "example";
	example: ExampleActionTypeStatus;
}
/**
* The status to indicate whether the ActionType is either Experimental, Active, Deprecated, or Example.
*/
export type ActionTypeStatus = ActionTypeStatus_experimental | ActionTypeStatus_active | ActionTypeStatus_deprecated | ActionTypeStatus_example;
