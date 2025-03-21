import type { ActiveLinkTypeStatus } from "./ActiveLinkTypeStatus.js";
import type { ExampleLinkTypeStatus } from "./ExampleLinkTypeStatus.js";
import type { ExperimentalLinkTypeStatus } from "./ExperimentalLinkTypeStatus.js";
import type { OntologyIrDeprecatedLinkTypeStatus } from "./OntologyIrDeprecatedLinkTypeStatus.js";
export interface OntologyIrLinkTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalLinkTypeStatus;
}
export interface OntologyIrLinkTypeStatus_active {
	type: "active";
	active: ActiveLinkTypeStatus;
}
export interface OntologyIrLinkTypeStatus_deprecated {
	type: "deprecated";
	deprecated: OntologyIrDeprecatedLinkTypeStatus;
}
export interface OntologyIrLinkTypeStatus_example {
	type: "example";
	example: ExampleLinkTypeStatus;
}
/**
* The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
*/
export type OntologyIrLinkTypeStatus = OntologyIrLinkTypeStatus_experimental | OntologyIrLinkTypeStatus_active | OntologyIrLinkTypeStatus_deprecated | OntologyIrLinkTypeStatus_example;
