import type { ActiveObjectTypeStatus } from "./ActiveObjectTypeStatus.js";
import type { DeprecatedObjectTypeStatus } from "./DeprecatedObjectTypeStatus.js";
import type { EndorsedObjectTypeStatus } from "./EndorsedObjectTypeStatus.js";
import type { ExampleObjectTypeStatus } from "./ExampleObjectTypeStatus.js";
import type { ExperimentalObjectTypeStatus } from "./ExperimentalObjectTypeStatus.js";
export interface ObjectTypeStatus_experimental {
	type: "experimental";
	experimental: ExperimentalObjectTypeStatus;
}
export interface ObjectTypeStatus_active {
	type: "active";
	active: ActiveObjectTypeStatus;
}
export interface ObjectTypeStatus_deprecated {
	type: "deprecated";
	deprecated: DeprecatedObjectTypeStatus;
}
export interface ObjectTypeStatus_example {
	type: "example";
	example: ExampleObjectTypeStatus;
}
export interface ObjectTypeStatus_endorsed {
	type: "endorsed";
	endorsed: EndorsedObjectTypeStatus;
}
/**
* The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, Example or Endorsed.
*/
export type ObjectTypeStatus = ObjectTypeStatus_experimental | ObjectTypeStatus_active | ObjectTypeStatus_deprecated | ObjectTypeStatus_example | ObjectTypeStatus_endorsed;
