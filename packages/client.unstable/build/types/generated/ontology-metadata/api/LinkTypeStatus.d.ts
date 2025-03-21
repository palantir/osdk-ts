import type { ActiveLinkTypeStatus } from "./ActiveLinkTypeStatus.js";
import type { DeprecatedLinkTypeStatus } from "./DeprecatedLinkTypeStatus.js";
import type { ExampleLinkTypeStatus } from "./ExampleLinkTypeStatus.js";
import type { ExperimentalLinkTypeStatus } from "./ExperimentalLinkTypeStatus.js";
export interface LinkTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalLinkTypeStatus;
}
export interface LinkTypeStatus_active {
	type: "active";
	active: ActiveLinkTypeStatus;
}
export interface LinkTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedLinkTypeStatus;
}
export interface LinkTypeStatus_example {
	type: "example";
	example: ExampleLinkTypeStatus;
}
/**
* The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
*/
export type LinkTypeStatus = LinkTypeStatus_experimental | LinkTypeStatus_active | LinkTypeStatus_deprecated | LinkTypeStatus_example;
