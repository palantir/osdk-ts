import type { BaseFilterOptions } from "./BaseFilter.js";
import type { Just } from "./Just.js";
interface StringFilterOptions extends BaseFilterOptions<string> {
	"$startsWith": string;
	"$containsAllTermsInOrder": string;
	"$containsAnyTerm": string | {
		term: string
		fuzzySearch?: boolean
	};
	"$containsAllTerms": string | {
		term: string
		fuzzySearch?: boolean
	};
	"$in": ReadonlyArray<string>;
}
export declare namespace StringFilter {
	interface $eq extends Just<"$eq", StringFilterOptions> {}
	interface $ne extends Just<"$ne", StringFilterOptions> {}
	interface $isNull extends Just<"$isNull", StringFilterOptions> {}
	interface $startsWith extends Just<"$startsWith", StringFilterOptions> {}
	interface $containsAllTermsInOrder extends Just<"$containsAllTermsInOrder", StringFilterOptions> {}
	interface $containsAnyTerm extends Just<"$containsAnyTerm", StringFilterOptions> {}
	interface $containsAllTerms extends Just<"$containsAllTerms", StringFilterOptions> {}
	interface $in extends Just<"$in", StringFilterOptions> {}
}
export type StringFilter = string | StringFilter.$eq | StringFilter.$ne | StringFilter.$isNull | StringFilter.$in | StringFilter.$startsWith | StringFilter.$containsAllTermsInOrder | StringFilter.$containsAnyTerm | StringFilter.$containsAllTerms;
export {};
