import type { BucketRange } from "./BucketRange.js";
/**
* Bucketing dividing objects into buckets according to specified ranges.
*/
export interface RangeBucketing {
	ranges: Array<BucketRange>;
}
