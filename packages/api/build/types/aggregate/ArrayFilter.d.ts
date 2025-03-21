import type { Just } from "./Just.js";
interface ArrayFilterOptions<T> {
	"$contains": T;
	"$isNull": boolean;
}
declare namespace ArrayFilter {
	interface $contains<T> extends Just<"$contains", ArrayFilterOptions<T>> {}
	interface $isNull<T> extends Just<"$isNull", ArrayFilterOptions<T>> {}
}
export type ArrayFilter<T> = ArrayFilter.$contains<T> | ArrayFilter.$isNull<T>;
export {};
