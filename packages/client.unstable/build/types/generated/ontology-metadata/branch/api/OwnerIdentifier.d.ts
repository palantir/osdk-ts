import type { OwnerIdentifierBuilder } from "./OwnerIdentifierBuilder.js";
import type { OwnerIdentifierNone } from "./OwnerIdentifierNone.js";
export interface OwnerIdentifier_builder {
	type: "builder";
	builder: OwnerIdentifierBuilder;
}
export interface OwnerIdentifier_none {
	type: "none";
	none: OwnerIdentifierNone;
}
export type OwnerIdentifier = OwnerIdentifier_builder | OwnerIdentifier_none;
