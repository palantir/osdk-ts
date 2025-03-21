import type { KnnQuery } from "./KnnQuery.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { PropertyId } from "./PropertyId.js";
/**
* ObjectSet containing the top k objects with propertyId nearest to the given vector.
*/
export interface KnnObjectSetV2 {
	objectSet: ObjectSet;
	propertyId: PropertyId;
	kValue: number;
	query: KnnQuery;
}
