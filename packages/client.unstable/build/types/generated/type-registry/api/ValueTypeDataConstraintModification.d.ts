import type { DataConstraintWrapperModification } from "./DataConstraintWrapperModification.js";
/**
* A copy of ValueTypeDataConstraint made to decouple the storage and request types for Value Type data
* constraint representation. At the moment, the only difference between the types is for StructV2.
*/
export interface ValueTypeDataConstraintModification {
	constraint: DataConstraintWrapperModification;
}
