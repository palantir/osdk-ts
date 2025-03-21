import type { LinkedMetric } from "./LinkedMetric.js";
import type { LinkedPropertyRelationSide } from "./LinkedPropertyRelationSide.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { RelationId } from "./RelationId.js";
/**
* A derived property that references an aggregation on a set of linked objects.
* The linked objects are specified by a link type and direction.
*/
export interface LinkedObjectsAggregationPropertyDefinition {
	relationId: RelationId;
	relationSide: LinkedPropertyRelationSide;
	metric: LinkedMetric;
	targetObjectSet: ObjectSet;
}
