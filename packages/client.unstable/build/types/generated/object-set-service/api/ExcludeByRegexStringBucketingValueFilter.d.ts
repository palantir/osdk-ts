import type { RegexPattern } from "./RegexPattern.js";
/**
* Buckets will only be created for values not matching the provided regex.
*
* Throws if the regex pattern is invalid, or longer than 1000 characters.
*
* Warning: to avoid bad query performance, avoid using wildcard patterns (e.g. `.*`) without prefix or suffix.
*/
export interface ExcludeByRegexStringBucketingValueFilter {
	regex: RegexPattern;
}
