import type { Just } from "./Just.js";
export type BaseFilterOptions<T> = {
	"$eq": T
	"$ne": T
	"$isNull": boolean
	"$in": ReadonlyArray<T>
};
export declare namespace BaseFilter {
	interface $eq<T> extends Just<"$eq", BaseFilterOptions<T>> {}
	interface $ne<T> extends Just<"$ne", BaseFilterOptions<T>> {}
	interface $in<T> extends Just<"$in", BaseFilterOptions<T>> {}
	interface $isNull<T> extends Just<"$isNull", BaseFilterOptions<T>> {}
}
export type BaseFilter<T> = BaseFilter.$eq<T> | BaseFilter.$ne<T> | BaseFilter.$in<T> | BaseFilter.$isNull<T>;
