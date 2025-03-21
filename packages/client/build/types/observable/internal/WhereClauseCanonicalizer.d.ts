import type { ObjectOrInterfaceDefinition, WhereClause } from "@osdk/api";
import type { Canonical } from "./Canonical.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
export declare class WhereClauseCanonicalizer {
	#private;
	canonicalize<T extends ObjectOrInterfaceDefinition>(where: WhereClause<T> | SimpleWhereClause): Canonical<SimpleWhereClause>;
}
