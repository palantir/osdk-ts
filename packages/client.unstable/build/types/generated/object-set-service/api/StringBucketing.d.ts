import type { BucketCountLimit } from "./BucketCountLimit.js";
import type { StringBucketingValueFilter } from "./StringBucketingValueFilter.js";
/**
* Bucketing based upon a string property.
*/
export interface StringBucketing {
	maxBuckets: BucketCountLimit;
	valueFilter: StringBucketingValueFilter | undefined;
	defaultValue: string | undefined;
}
