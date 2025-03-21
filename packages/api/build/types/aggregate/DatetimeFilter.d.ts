import type { BaseFilterOptions } from "./BaseFilter.js";
import type { Just } from "./Just.js";
export interface DatetimeFilterOptions extends BaseFilterOptions<string> {
	"$gt": string;
	"$gte": string;
	"$lt": string;
	"$lte": string;
}
export declare namespace DatetimeFilter {
	interface $eq extends Just<"$eq", DatetimeFilterOptions> {}
	interface $ne extends Just<"$ne", DatetimeFilterOptions> {}
	interface $isNull extends Just<"$isNull", DatetimeFilterOptions> {}
	interface $gt extends Just<"$gt", DatetimeFilterOptions> {}
	interface $gte extends Just<"$gte", DatetimeFilterOptions> {}
	interface $lt extends Just<"$lt", DatetimeFilterOptions> {}
	interface $lte extends Just<"$lte", DatetimeFilterOptions> {}
	interface $in extends Just<"$in", DatetimeFilterOptions> {}
}
export type DatetimeFilter = string | DatetimeFilter.$eq | DatetimeFilter.$ne | DatetimeFilter.$isNull | DatetimeFilter.$in | DatetimeFilter.$gt | DatetimeFilter.$gte | DatetimeFilter.$lt | DatetimeFilter.$lte;
