import { LtQuery } from "./LtQuery";
import { GtQuery } from "./GtQuery";
import { LteQuery } from "./LteQuery";
import { GteQuery } from "./GteQuery";
import { EqualsQuery } from "./EqualsQuery";
import { IsNullQuery } from "./IsNullQuery";
import { ContainsQuery } from "./ContainsQuery";
import { AndQuery } from "./AndQuery";
import { OrQuery } from "./OrQuery";
import { NotQuery } from "./NotQuery";
import { PrefixQuery } from "./PrefixQuery";
import { PhraseQuery } from "./PhraseQuery";
import { AnyTermQuery } from "./AnyTermQuery";
import { AllTermsQuery } from "./AllTermsQuery";

export interface SearchJsonQuery_Lt extends LtQuery {
    type: "lt";
}

export interface SearchJsonQuery_Gt extends GtQuery {
    type: "gt";
}

export interface SearchJsonQuery_Lte extends LteQuery {
    type: "lte";
}

export interface SearchJsonQuery_Gte extends GteQuery {
    type: "gte";
}

export interface SearchJsonQuery_Eq extends EqualsQuery {
    type: "eq";
}

export interface SearchJsonQuery_IsNull extends IsNullQuery {
    type: "isNull";
}

export interface SearchJsonQuery_Contains extends ContainsQuery {
    type: "contains";
}

export interface SearchJsonQuery_And extends AndQuery {
    type: "and";
}

export interface SearchJsonQuery_Or extends OrQuery {
    type: "or";
}

export interface SearchJsonQuery_Not extends NotQuery {
    type: "not";
}

export interface SearchJsonQuery_Prefix extends PrefixQuery {
    type: "prefix";
}

export interface SearchJsonQuery_Phrase extends PhraseQuery {
    type: "phrase";
}

export interface SearchJsonQuery_AnyTerm extends AnyTermQuery {
    type: "anyTerm";
}

export interface SearchJsonQuery_AllTerms extends AllTermsQuery {
    type: "allTerms";
}

export type SearchJsonQuery = SearchJsonQuery_Lt | SearchJsonQuery_Gt | SearchJsonQuery_Lte | SearchJsonQuery_Gte | SearchJsonQuery_Eq | SearchJsonQuery_IsNull | SearchJsonQuery_Contains | SearchJsonQuery_And | SearchJsonQuery_Or | SearchJsonQuery_Not | SearchJsonQuery_Prefix | SearchJsonQuery_Phrase | SearchJsonQuery_AnyTerm | SearchJsonQuery_AllTerms;
