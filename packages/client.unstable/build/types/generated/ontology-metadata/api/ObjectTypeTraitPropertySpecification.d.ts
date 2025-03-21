import type { BasePropertyType } from "./BasePropertyType.js";
/**
* Specifications to be enforced on all the `PropertyType`(s) derived from the trait.
*/
export interface ObjectTypeTraitPropertySpecification {
	enforcedDataTypes: Array<BasePropertyType>;
	required: boolean;
}
