import type { MaxBucketsBucketing } from "./MaxBucketsBucketing.js";
/**
* Dimension where objects get divided into buckets based on their object type.
*/
export interface ObjectTypeDimension {
	bucketing: MaxBucketsBucketing;
}
