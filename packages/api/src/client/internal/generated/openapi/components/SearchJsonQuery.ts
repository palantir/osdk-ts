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

function isLt(obj: SearchJsonQuery): obj is SearchJsonQuery_Lt {
    return (obj.type === "lt");
}

function lt(obj: LtQuery): SearchJsonQuery_Lt {
    return {
        ...obj,
        type: "lt",
    };
}

export interface SearchJsonQuery_Gt extends GtQuery {
    type: "gt";
}

function isGt(obj: SearchJsonQuery): obj is SearchJsonQuery_Gt {
    return (obj.type === "gt");
}

function gt(obj: GtQuery): SearchJsonQuery_Gt {
    return {
        ...obj,
        type: "gt",
    };
}

export interface SearchJsonQuery_Lte extends LteQuery {
    type: "lte";
}

function isLte(obj: SearchJsonQuery): obj is SearchJsonQuery_Lte {
    return (obj.type === "lte");
}

function lte(obj: LteQuery): SearchJsonQuery_Lte {
    return {
        ...obj,
        type: "lte",
    };
}

export interface SearchJsonQuery_Gte extends GteQuery {
    type: "gte";
}

function isGte(obj: SearchJsonQuery): obj is SearchJsonQuery_Gte {
    return (obj.type === "gte");
}

function gte(obj: GteQuery): SearchJsonQuery_Gte {
    return {
        ...obj,
        type: "gte",
    };
}

export interface SearchJsonQuery_Eq extends EqualsQuery {
    type: "eq";
}

function isEq(obj: SearchJsonQuery): obj is SearchJsonQuery_Eq {
    return (obj.type === "eq");
}

function eq(obj: EqualsQuery): SearchJsonQuery_Eq {
    return {
        ...obj,
        type: "eq",
    };
}

export interface SearchJsonQuery_IsNull extends IsNullQuery {
    type: "isNull";
}

function isIsNull(obj: SearchJsonQuery): obj is SearchJsonQuery_IsNull {
    return (obj.type === "isNull");
}

function isNull(obj: IsNullQuery): SearchJsonQuery_IsNull {
    return {
        ...obj,
        type: "isNull",
    };
}

export interface SearchJsonQuery_Contains extends ContainsQuery {
    type: "contains";
}

function isContains(obj: SearchJsonQuery): obj is SearchJsonQuery_Contains {
    return (obj.type === "contains");
}

function contains(obj: ContainsQuery): SearchJsonQuery_Contains {
    return {
        ...obj,
        type: "contains",
    };
}

export interface SearchJsonQuery_And extends AndQuery {
    type: "and";
}

function isAnd(obj: SearchJsonQuery): obj is SearchJsonQuery_And {
    return (obj.type === "and");
}

function and(obj: AndQuery): SearchJsonQuery_And {
    return {
        ...obj,
        type: "and",
    };
}

export interface SearchJsonQuery_Or extends OrQuery {
    type: "or";
}

function isOr(obj: SearchJsonQuery): obj is SearchJsonQuery_Or {
    return (obj.type === "or");
}

function or(obj: OrQuery): SearchJsonQuery_Or {
    return {
        ...obj,
        type: "or",
    };
}

export interface SearchJsonQuery_Not extends NotQuery {
    type: "not";
}

function isNot(obj: SearchJsonQuery): obj is SearchJsonQuery_Not {
    return (obj.type === "not");
}

function not(obj: NotQuery): SearchJsonQuery_Not {
    return {
        ...obj,
        type: "not",
    };
}

export interface SearchJsonQuery_Prefix extends PrefixQuery {
    type: "prefix";
}

function isPrefix(obj: SearchJsonQuery): obj is SearchJsonQuery_Prefix {
    return (obj.type === "prefix");
}

function prefix(obj: PrefixQuery): SearchJsonQuery_Prefix {
    return {
        ...obj,
        type: "prefix",
    };
}

export interface SearchJsonQuery_Phrase extends PhraseQuery {
    type: "phrase";
}

function isPhrase(obj: SearchJsonQuery): obj is SearchJsonQuery_Phrase {
    return (obj.type === "phrase");
}

function phrase(obj: PhraseQuery): SearchJsonQuery_Phrase {
    return {
        ...obj,
        type: "phrase",
    };
}

export interface SearchJsonQuery_AnyTerm extends AnyTermQuery {
    type: "anyTerm";
}

function isAnyTerm(obj: SearchJsonQuery): obj is SearchJsonQuery_AnyTerm {
    return (obj.type === "anyTerm");
}

function anyTerm(obj: AnyTermQuery): SearchJsonQuery_AnyTerm {
    return {
        ...obj,
        type: "anyTerm",
    };
}

export interface SearchJsonQuery_AllTerms extends AllTermsQuery {
    type: "allTerms";
}

function isAllTerms(obj: SearchJsonQuery): obj is SearchJsonQuery_AllTerms {
    return (obj.type === "allTerms");
}

function allTerms(obj: AllTermsQuery): SearchJsonQuery_AllTerms {
    return {
        ...obj,
        type: "allTerms",
    };
}

export interface SearchJsonQueryVisitor<T> {
    lt: (obj: LtQuery) => T;
    gt: (obj: GtQuery) => T;
    lte: (obj: LteQuery) => T;
    gte: (obj: GteQuery) => T;
    eq: (obj: EqualsQuery) => T;
    isNull: (obj: IsNullQuery) => T;
    contains: (obj: ContainsQuery) => T;
    and: (obj: AndQuery) => T;
    or: (obj: OrQuery) => T;
    not: (obj: NotQuery) => T;
    prefix: (obj: PrefixQuery) => T;
    phrase: (obj: PhraseQuery) => T;
    anyTerm: (obj: AnyTermQuery) => T;
    allTerms: (obj: AllTermsQuery) => T;
    unknown: (obj: SearchJsonQuery) => T;
}

function visit<T>(obj: SearchJsonQuery, visitor: SearchJsonQueryVisitor<T>): T {
    if (isLt(obj)) {
        return visitor.lt(obj);
    }

    if (isGt(obj)) {
        return visitor.gt(obj);
    }

    if (isLte(obj)) {
        return visitor.lte(obj);
    }

    if (isGte(obj)) {
        return visitor.gte(obj);
    }

    if (isEq(obj)) {
        return visitor.eq(obj);
    }

    if (isIsNull(obj)) {
        return visitor.isNull(obj);
    }

    if (isContains(obj)) {
        return visitor.contains(obj);
    }

    if (isAnd(obj)) {
        return visitor.and(obj);
    }

    if (isOr(obj)) {
        return visitor.or(obj);
    }

    if (isNot(obj)) {
        return visitor.not(obj);
    }

    if (isPrefix(obj)) {
        return visitor.prefix(obj);
    }

    if (isPhrase(obj)) {
        return visitor.phrase(obj);
    }

    if (isAnyTerm(obj)) {
        return visitor.anyTerm(obj);
    }

    if (isAllTerms(obj)) {
        return visitor.allTerms(obj);
    }

    return visitor.unknown(obj);
}

export type SearchJsonQuery = SearchJsonQuery_Lt | SearchJsonQuery_Gt | SearchJsonQuery_Lte | SearchJsonQuery_Gte | SearchJsonQuery_Eq | SearchJsonQuery_IsNull | SearchJsonQuery_Contains | SearchJsonQuery_And | SearchJsonQuery_Or | SearchJsonQuery_Not | SearchJsonQuery_Prefix | SearchJsonQuery_Phrase | SearchJsonQuery_AnyTerm | SearchJsonQuery_AllTerms;

export const SearchJsonQuery = {
    isLt: isLt,
    lt: lt,
    isGt: isGt,
    gt: gt,
    isLte: isLte,
    lte: lte,
    isGte: isGte,
    gte: gte,
    isEq: isEq,
    eq: eq,
    isIsNull: isIsNull,
    isNull: isNull,
    isContains: isContains,
    contains: contains,
    isAnd: isAnd,
    and: and,
    isOr: isOr,
    or: or,
    isNot: isNot,
    not: not,
    isPrefix: isPrefix,
    prefix: prefix,
    isPhrase: isPhrase,
    phrase: phrase,
    isAnyTerm: isAnyTerm,
    anyTerm: anyTerm,
    isAllTerms: isAllTerms,
    allTerms: allTerms,
    visit: visit,
};
