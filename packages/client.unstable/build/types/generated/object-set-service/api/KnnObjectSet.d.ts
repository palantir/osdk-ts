import type { ObjectSet } from "./ObjectSet.js";
import type { PropertyId } from "./PropertyId.js";
import type { Vector } from "./Vector.js";
/**
* WARNING: this feature is supported only for object types stored in Object Storage V2
*
* ObjectSet containing the top k objects with propertyId nearest to the given vector.
*/
export interface KnnObjectSet {
	objectSet: ObjectSet;
	propertyId: PropertyId;
	kValue: number;
	vector: Vector;
}
