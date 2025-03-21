import type { PropertyId } from "../../PropertyId.js";
import type { Vector } from "../../Vector.js";
import type { LogicalObjectSet } from "./LogicalObjectSet.js";
/**
* DEPRECATED: Use KnnObjectSetV2 instead.
*
* ObjectSet containing the top k objects with propertyId nearest to the given vector.
*/
export interface KnnObjectSet {
	objectSet: LogicalObjectSet;
	propertyId: PropertyId;
	kValue: number;
	vector: Vector;
}
