import type { AggregateResultAccuracy } from "./AggregateResultAccuracy.js";
import type { Bucket } from "./Bucket.js";
/**
* Results of a sub-aggregation.
*/
export interface SubAggregateResult {
	itemsInOtherBuckets: number;
	resultAccuracy: AggregateResultAccuracy;
	buckets: Array<Bucket>;
}
