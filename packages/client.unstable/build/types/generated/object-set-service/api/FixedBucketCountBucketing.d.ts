/**
* Bucketing dividing objects into the given number of buckets.
*/
export interface FixedBucketCountBucketing {
	numBuckets: number;
	preferHumanFriendlyRanges: boolean | undefined;
}
