import type { ValueReference } from "./ValueReference.js";
/**
* True if the value of the referenced property is null for the user. This can happen either if the underlying
* value is null, or the user cannot access the data source that generates the referenced property.
*/
export interface IsNullCondition {
	property: ValueReference;
}
