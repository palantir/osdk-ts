import type { BaseFilterOptions } from "./BaseFilter.js";
import type { Just } from "./Just.js";
interface BooleanFilterOptions extends BaseFilterOptions<boolean> {}
export declare namespace BooleanFilter {
	interface $eq extends Just<"$eq", BooleanFilterOptions> {}
	interface $ne extends Just<"$ne", BooleanFilterOptions> {}
	interface $isNull extends Just<"$isNull", BooleanFilterOptions> {}
	interface $in extends Just<"$in", BooleanFilterOptions> {}
}
export type BooleanFilter = boolean | BooleanFilter.$eq | BooleanFilter.$ne | BooleanFilter.$in | BooleanFilter.$isNull;
export {};
