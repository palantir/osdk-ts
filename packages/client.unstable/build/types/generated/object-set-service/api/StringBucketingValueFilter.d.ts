import type { ExcludeByRegexStringBucketingValueFilter } from "./ExcludeByRegexStringBucketingValueFilter.js";
import type { ExcludeValuesStringBucketingValueFilter } from "./ExcludeValuesStringBucketingValueFilter.js";
import type { IncludeByRegexStringBucketingValueFilter } from "./IncludeByRegexStringBucketingValueFilter.js";
import type { IncludeValuesStringBucketingValueFilter } from "./IncludeValuesStringBucketingValueFilter.js";
export interface StringBucketingValueFilter_includeValues {
	type: "includeValues";
	includeValues: IncludeValuesStringBucketingValueFilter;
}
export interface StringBucketingValueFilter_excludeValues {
	type: "excludeValues";
	excludeValues: ExcludeValuesStringBucketingValueFilter;
}
export interface StringBucketingValueFilter_includeByRegex {
	type: "includeByRegex";
	includeByRegex: IncludeByRegexStringBucketingValueFilter;
}
export interface StringBucketingValueFilter_excludeByRegex {
	type: "excludeByRegex";
	excludeByRegex: ExcludeByRegexStringBucketingValueFilter;
}
/**
* Available value filters to use when doing aggregations with string bucketing.
* Please refer to documentation of particular filters for more details.
*/
export type StringBucketingValueFilter = StringBucketingValueFilter_includeValues | StringBucketingValueFilter_excludeValues | StringBucketingValueFilter_includeByRegex | StringBucketingValueFilter_excludeByRegex;
