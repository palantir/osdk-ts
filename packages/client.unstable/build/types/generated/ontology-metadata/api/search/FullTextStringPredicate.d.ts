export interface FullTextStringPredicate_exact {
	type: "exact";
	exact: string;
}
export interface FullTextStringPredicate_contains {
	type: "contains";
	contains: string;
}
/**
* Predicate for matching Strings.
*/
export type FullTextStringPredicate = FullTextStringPredicate_exact | FullTextStringPredicate_contains;
