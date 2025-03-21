import type { BaseFilterOptions } from "./BaseFilter.js";
import type { Just } from "./Just.js";
interface NumberFilterOptions extends BaseFilterOptions<number> {
	"$gt": number;
	"$gte": number;
	"$lt": number;
	"$lte": number;
}
export declare namespace NumberFilter {
	interface $eq extends Just<"$eq", NumberFilterOptions> {}
	interface $ne extends Just<"$ne", NumberFilterOptions> {}
	interface $isNull extends Just<"$isNull", NumberFilterOptions> {}
	interface $gt extends Just<"$gt", NumberFilterOptions> {}
	interface $gte extends Just<"$gte", NumberFilterOptions> {}
	interface $lt extends Just<"$lt", NumberFilterOptions> {}
	interface $lte extends Just<"$lte", NumberFilterOptions> {}
	interface $in extends Just<"$in", NumberFilterOptions> {}
}
export type NumberFilter = number | NumberFilter.$eq | NumberFilter.$ne | NumberFilter.$isNull | NumberFilter.$in | NumberFilter.$gt | NumberFilter.$gte | NumberFilter.$lt | NumberFilter.$lte;
export {};
