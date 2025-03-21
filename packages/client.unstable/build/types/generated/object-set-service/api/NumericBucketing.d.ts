import type { FixedBucketCountBucketing } from "./FixedBucketCountBucketing.js";
import type { FixedWidthBucketing } from "./FixedWidthBucketing.js";
import type { RangeBucketing } from "./RangeBucketing.js";
export interface NumericBucketing_fixedBucketCount {
	type: "fixedBucketCount";
	fixedBucketCount: FixedBucketCountBucketing;
}
export interface NumericBucketing_fixedWidth {
	type: "fixedWidth";
	fixedWidth: FixedWidthBucketing;
}
export interface NumericBucketing_range {
	type: "range";
	range: RangeBucketing;
}
/**
* Bucketing based upon a numeric property
*/
export type NumericBucketing = NumericBucketing_fixedBucketCount | NumericBucketing_fixedWidth | NumericBucketing_range;
