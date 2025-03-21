export interface StringPredicate_exact {
	type: "exact";
	exact: string;
}
/**
* Predicate for matching Strings.
*/
export type StringPredicate = StringPredicate_exact;
