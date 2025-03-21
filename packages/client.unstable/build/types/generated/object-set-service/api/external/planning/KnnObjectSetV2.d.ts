import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { Vector } from "../../Vector.js";
import type { LogicalObjectSet } from "./LogicalObjectSet.js";
import type { PropertySet } from "./PropertySet.js";
/**
* ObjectSet containing the top k objects with propertyId nearest to the given vector.
*/
export interface KnnObjectSetV2 {
	objectSet: LogicalObjectSet;
	propertySet: PropertySet;
	kValue: number;
	vector: Record<ObjectTypeRid, Vector>;
}
