import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
export interface TypeGroupClause_and {
	type: "and";
	and: Array<TypeGroupClause>;
}
export interface TypeGroupClause_or {
	type: "or";
	or: Array<TypeGroupClause>;
}
export interface TypeGroupClause_displayName {
	type: "displayName";
	displayName: FullTextStringPredicate;
}
export interface TypeGroupClause_description {
	type: "description";
	description: FullTextStringPredicate;
}
/**
* Data structure to represent a search query for InterfaceTypes. Supports filters for various
* InterfaceType features.
*/
export type TypeGroupClause = TypeGroupClause_and | TypeGroupClause_or | TypeGroupClause_displayName | TypeGroupClause_description;
