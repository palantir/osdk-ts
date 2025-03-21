import type { StringPredicate } from "./StringPredicate.js";
/**
* Predicate for matching TypeClasses. Matches TypeClass when `kind` and `name` match the corresponding
* attribute of TypeClass. If `name` is empty, only `kind` is required to match.
*/
export interface TypeClassPredicate {
	kind: StringPredicate;
	name: StringPredicate | undefined;
}
