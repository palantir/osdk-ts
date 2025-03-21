import type { ActiveObjectTypeStatus } from "./ActiveObjectTypeStatus.js";
import type { EndorsedObjectTypeStatus } from "./EndorsedObjectTypeStatus.js";
import type { ExampleObjectTypeStatus } from "./ExampleObjectTypeStatus.js";
import type { ExperimentalObjectTypeStatus } from "./ExperimentalObjectTypeStatus.js";
import type { OntologyIrDeprecatedObjectTypeStatus } from "./OntologyIrDeprecatedObjectTypeStatus.js";
export interface OntologyIrObjectTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalObjectTypeStatus;
}
export interface OntologyIrObjectTypeStatus_active {
	type: "active";
	active: ActiveObjectTypeStatus;
}
export interface OntologyIrObjectTypeStatus_deprecated {
	type: "deprecated";
	deprecated: OntologyIrDeprecatedObjectTypeStatus;
}
export interface OntologyIrObjectTypeStatus_example {
	type: "example";
	example: ExampleObjectTypeStatus;
}
export interface OntologyIrObjectTypeStatus_endorsed {
	type: "endorsed";
	endorsed: EndorsedObjectTypeStatus;
}
/**
* The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
*/
export type OntologyIrObjectTypeStatus = OntologyIrObjectTypeStatus_experimental | OntologyIrObjectTypeStatus_active | OntologyIrObjectTypeStatus_deprecated | OntologyIrObjectTypeStatus_example | OntologyIrObjectTypeStatus_endorsed;
