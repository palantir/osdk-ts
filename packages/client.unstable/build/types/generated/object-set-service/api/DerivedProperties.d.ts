import type { DerivedPropertyDefinition } from "./DerivedPropertyDefinition.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A collection of derived properties that can be referenced in an object set or aggregation.
* They are ephemeral and only exist for the lifetime of a request.
*/
export type DerivedProperties = Record<PropertyId, DerivedPropertyDefinition>;
