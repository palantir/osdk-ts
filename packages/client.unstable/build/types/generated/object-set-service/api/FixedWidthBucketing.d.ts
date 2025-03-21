import type { BucketCountLimit } from "./BucketCountLimit.js";
/**
* Bucketing dividing objects into buckets with fixed width.
*/
export interface FixedWidthBucketing {
	bucketWidth: number;
	maxBuckets: BucketCountLimit | undefined;
	excludeEmptyBuckets: boolean | undefined;
}
