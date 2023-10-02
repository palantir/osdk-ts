import { LtQuery } from "./LtQuery";
import { GtQuery } from "./GtQuery";
import { LteQuery } from "./LteQuery";
import { GteQuery } from "./GteQuery";
import { EqualsQuery } from "./EqualsQuery";
import { IsNullQuery } from "./IsNullQuery";
import { ContainsQuery } from "./ContainsQuery";
import { AndQueryV2 } from "./AndQueryV2";
import { OrQueryV2 } from "./OrQueryV2";
import { NotQueryV2 } from "./NotQueryV2";
import { StartsWithQuery } from "./StartsWithQuery";
import { ContainsAllTermsInOrderQuery } from "./ContainsAllTermsInOrderQuery";
import { ContainsAllTermsInOrderPrefixLastTerm } from "./ContainsAllTermsInOrderPrefixLastTerm";
import { ContainsAnyTermQuery } from "./ContainsAnyTermQuery";
import { ContainsAllTermsQuery } from "./ContainsAllTermsQuery";
import { WithinDistanceOfQuery } from "./WithinDistanceOfQuery";
import { WithinBoundingBoxQuery } from "./WithinBoundingBoxQuery";
import { IntersectsBoundingBoxQuery } from "./IntersectsBoundingBoxQuery";
import { DoesNotIntersectBoundingBoxQuery } from "./DoesNotIntersectBoundingBoxQuery";
import { WithinPolygonQuery } from "./WithinPolygonQuery";
import { IntersectsPolygonQuery } from "./IntersectsPolygonQuery";
import { DoesNotIntersectPolygonQuery } from "./DoesNotIntersectPolygonQuery";

export interface SearchJsonQueryV2_Lt extends LtQuery {
    type: "lt";
}

function isLt(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Lt {
    return (obj.type === "lt");
}

function lt(obj: LtQuery): SearchJsonQueryV2_Lt {
    return {
        ...obj,
        type: "lt",
    };
}

export interface SearchJsonQueryV2_Gt extends GtQuery {
    type: "gt";
}

function isGt(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Gt {
    return (obj.type === "gt");
}

function gt(obj: GtQuery): SearchJsonQueryV2_Gt {
    return {
        ...obj,
        type: "gt",
    };
}

export interface SearchJsonQueryV2_Lte extends LteQuery {
    type: "lte";
}

function isLte(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Lte {
    return (obj.type === "lte");
}

function lte(obj: LteQuery): SearchJsonQueryV2_Lte {
    return {
        ...obj,
        type: "lte",
    };
}

export interface SearchJsonQueryV2_Gte extends GteQuery {
    type: "gte";
}

function isGte(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Gte {
    return (obj.type === "gte");
}

function gte(obj: GteQuery): SearchJsonQueryV2_Gte {
    return {
        ...obj,
        type: "gte",
    };
}

export interface SearchJsonQueryV2_Eq extends EqualsQuery {
    type: "eq";
}

function isEq(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Eq {
    return (obj.type === "eq");
}

function eq(obj: EqualsQuery): SearchJsonQueryV2_Eq {
    return {
        ...obj,
        type: "eq",
    };
}

export interface SearchJsonQueryV2_IsNull extends IsNullQuery {
    type: "isNull";
}

function isIsNull(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_IsNull {
    return (obj.type === "isNull");
}

function isNull(obj: IsNullQuery): SearchJsonQueryV2_IsNull {
    return {
        ...obj,
        type: "isNull",
    };
}

export interface SearchJsonQueryV2_Contains extends ContainsQuery {
    type: "contains";
}

function isContains(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Contains {
    return (obj.type === "contains");
}

function contains(obj: ContainsQuery): SearchJsonQueryV2_Contains {
    return {
        ...obj,
        type: "contains",
    };
}

export interface SearchJsonQueryV2_And extends AndQueryV2 {
    type: "and";
}

function isAnd(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_And {
    return (obj.type === "and");
}

function and(obj: AndQueryV2): SearchJsonQueryV2_And {
    return {
        ...obj,
        type: "and",
    };
}

export interface SearchJsonQueryV2_Or extends OrQueryV2 {
    type: "or";
}

function isOr(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Or {
    return (obj.type === "or");
}

function or(obj: OrQueryV2): SearchJsonQueryV2_Or {
    return {
        ...obj,
        type: "or",
    };
}

export interface SearchJsonQueryV2_Not extends NotQueryV2 {
    type: "not";
}

function isNot(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_Not {
    return (obj.type === "not");
}

function not(obj: NotQueryV2): SearchJsonQueryV2_Not {
    return {
        ...obj,
        type: "not",
    };
}

export interface SearchJsonQueryV2_StartsWith extends StartsWithQuery {
    type: "startsWith";
}

function isStartsWith(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_StartsWith {
    return (obj.type === "startsWith");
}

function startsWith(obj: StartsWithQuery): SearchJsonQueryV2_StartsWith {
    return {
        ...obj,
        type: "startsWith",
    };
}

export interface SearchJsonQueryV2_ContainsAllTermsInOrder extends ContainsAllTermsInOrderQuery {
    type: "containsAllTermsInOrder";
}

function isContainsAllTermsInOrder(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_ContainsAllTermsInOrder {
    return (obj.type === "containsAllTermsInOrder");
}

function containsAllTermsInOrder(obj: ContainsAllTermsInOrderQuery): SearchJsonQueryV2_ContainsAllTermsInOrder {
    return {
        ...obj,
        type: "containsAllTermsInOrder",
    };
}

export interface SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm extends ContainsAllTermsInOrderPrefixLastTerm {
    type: "containsAllTermsInOrderPrefixLastTerm";
}

function isContainsAllTermsInOrderPrefixLastTerm(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm {
    return (obj.type === "containsAllTermsInOrderPrefixLastTerm");
}

function containsAllTermsInOrderPrefixLastTerm(obj: ContainsAllTermsInOrderPrefixLastTerm): SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm {
    return {
        ...obj,
        type: "containsAllTermsInOrderPrefixLastTerm",
    };
}

export interface SearchJsonQueryV2_ContainsAnyTerm extends ContainsAnyTermQuery {
    type: "containsAnyTerm";
}

function isContainsAnyTerm(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_ContainsAnyTerm {
    return (obj.type === "containsAnyTerm");
}

function containsAnyTerm(obj: ContainsAnyTermQuery): SearchJsonQueryV2_ContainsAnyTerm {
    return {
        ...obj,
        type: "containsAnyTerm",
    };
}

export interface SearchJsonQueryV2_ContainsAllTerms extends ContainsAllTermsQuery {
    type: "containsAllTerms";
}

function isContainsAllTerms(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_ContainsAllTerms {
    return (obj.type === "containsAllTerms");
}

function containsAllTerms(obj: ContainsAllTermsQuery): SearchJsonQueryV2_ContainsAllTerms {
    return {
        ...obj,
        type: "containsAllTerms",
    };
}

export interface SearchJsonQueryV2_WithinDistanceOf extends WithinDistanceOfQuery {
    type: "withinDistanceOf";
}

function isWithinDistanceOf(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_WithinDistanceOf {
    return (obj.type === "withinDistanceOf");
}

function withinDistanceOf(obj: WithinDistanceOfQuery): SearchJsonQueryV2_WithinDistanceOf {
    return {
        ...obj,
        type: "withinDistanceOf",
    };
}

export interface SearchJsonQueryV2_WithinBoundingBox extends WithinBoundingBoxQuery {
    type: "withinBoundingBox";
}

function isWithinBoundingBox(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_WithinBoundingBox {
    return (obj.type === "withinBoundingBox");
}

function withinBoundingBox(obj: WithinBoundingBoxQuery): SearchJsonQueryV2_WithinBoundingBox {
    return {
        ...obj,
        type: "withinBoundingBox",
    };
}

export interface SearchJsonQueryV2_IntersectsBoundingBox extends IntersectsBoundingBoxQuery {
    type: "intersectsBoundingBox";
}

function isIntersectsBoundingBox(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_IntersectsBoundingBox {
    return (obj.type === "intersectsBoundingBox");
}

function intersectsBoundingBox(obj: IntersectsBoundingBoxQuery): SearchJsonQueryV2_IntersectsBoundingBox {
    return {
        ...obj,
        type: "intersectsBoundingBox",
    };
}

export interface SearchJsonQueryV2_DoesNotIntersectBoundingBox extends DoesNotIntersectBoundingBoxQuery {
    type: "doesNotIntersectBoundingBox";
}

function isDoesNotIntersectBoundingBox(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_DoesNotIntersectBoundingBox {
    return (obj.type === "doesNotIntersectBoundingBox");
}

function doesNotIntersectBoundingBox(obj: DoesNotIntersectBoundingBoxQuery): SearchJsonQueryV2_DoesNotIntersectBoundingBox {
    return {
        ...obj,
        type: "doesNotIntersectBoundingBox",
    };
}

export interface SearchJsonQueryV2_WithinPolygon extends WithinPolygonQuery {
    type: "withinPolygon";
}

function isWithinPolygon(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_WithinPolygon {
    return (obj.type === "withinPolygon");
}

function withinPolygon(obj: WithinPolygonQuery): SearchJsonQueryV2_WithinPolygon {
    return {
        ...obj,
        type: "withinPolygon",
    };
}

export interface SearchJsonQueryV2_IntersectsPolygon extends IntersectsPolygonQuery {
    type: "intersectsPolygon";
}

function isIntersectsPolygon(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_IntersectsPolygon {
    return (obj.type === "intersectsPolygon");
}

function intersectsPolygon(obj: IntersectsPolygonQuery): SearchJsonQueryV2_IntersectsPolygon {
    return {
        ...obj,
        type: "intersectsPolygon",
    };
}

export interface SearchJsonQueryV2_DoesNotIntersectPolygon extends DoesNotIntersectPolygonQuery {
    type: "doesNotIntersectPolygon";
}

function isDoesNotIntersectPolygon(obj: SearchJsonQueryV2): obj is SearchJsonQueryV2_DoesNotIntersectPolygon {
    return (obj.type === "doesNotIntersectPolygon");
}

function doesNotIntersectPolygon(obj: DoesNotIntersectPolygonQuery): SearchJsonQueryV2_DoesNotIntersectPolygon {
    return {
        ...obj,
        type: "doesNotIntersectPolygon",
    };
}

export interface SearchJsonQueryV2Visitor<T> {
    lt: (obj: LtQuery) => T;
    gt: (obj: GtQuery) => T;
    lte: (obj: LteQuery) => T;
    gte: (obj: GteQuery) => T;
    eq: (obj: EqualsQuery) => T;
    isNull: (obj: IsNullQuery) => T;
    contains: (obj: ContainsQuery) => T;
    and: (obj: AndQueryV2) => T;
    or: (obj: OrQueryV2) => T;
    not: (obj: NotQueryV2) => T;
    startsWith: (obj: StartsWithQuery) => T;
    containsAllTermsInOrder: (obj: ContainsAllTermsInOrderQuery) => T;
    containsAllTermsInOrderPrefixLastTerm: (obj: ContainsAllTermsInOrderPrefixLastTerm) => T;
    containsAnyTerm: (obj: ContainsAnyTermQuery) => T;
    containsAllTerms: (obj: ContainsAllTermsQuery) => T;
    withinDistanceOf: (obj: WithinDistanceOfQuery) => T;
    withinBoundingBox: (obj: WithinBoundingBoxQuery) => T;
    intersectsBoundingBox: (obj: IntersectsBoundingBoxQuery) => T;
    doesNotIntersectBoundingBox: (obj: DoesNotIntersectBoundingBoxQuery) => T;
    withinPolygon: (obj: WithinPolygonQuery) => T;
    intersectsPolygon: (obj: IntersectsPolygonQuery) => T;
    doesNotIntersectPolygon: (obj: DoesNotIntersectPolygonQuery) => T;
    unknown: (obj: SearchJsonQueryV2) => T;
}

function visit<T>(obj: SearchJsonQueryV2, visitor: SearchJsonQueryV2Visitor<T>): T {
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

    if (isStartsWith(obj)) {
        return visitor.startsWith(obj);
    }

    if (isContainsAllTermsInOrder(obj)) {
        return visitor.containsAllTermsInOrder(obj);
    }

    if (isContainsAllTermsInOrderPrefixLastTerm(obj)) {
        return visitor.containsAllTermsInOrderPrefixLastTerm(obj);
    }

    if (isContainsAnyTerm(obj)) {
        return visitor.containsAnyTerm(obj);
    }

    if (isContainsAllTerms(obj)) {
        return visitor.containsAllTerms(obj);
    }

    if (isWithinDistanceOf(obj)) {
        return visitor.withinDistanceOf(obj);
    }

    if (isWithinBoundingBox(obj)) {
        return visitor.withinBoundingBox(obj);
    }

    if (isIntersectsBoundingBox(obj)) {
        return visitor.intersectsBoundingBox(obj);
    }

    if (isDoesNotIntersectBoundingBox(obj)) {
        return visitor.doesNotIntersectBoundingBox(obj);
    }

    if (isWithinPolygon(obj)) {
        return visitor.withinPolygon(obj);
    }

    if (isIntersectsPolygon(obj)) {
        return visitor.intersectsPolygon(obj);
    }

    if (isDoesNotIntersectPolygon(obj)) {
        return visitor.doesNotIntersectPolygon(obj);
    }

    return visitor.unknown(obj);
}

export type SearchJsonQueryV2 = SearchJsonQueryV2_Lt | SearchJsonQueryV2_Gt | SearchJsonQueryV2_Lte | SearchJsonQueryV2_Gte | SearchJsonQueryV2_Eq | SearchJsonQueryV2_IsNull | SearchJsonQueryV2_Contains | SearchJsonQueryV2_And | SearchJsonQueryV2_Or | SearchJsonQueryV2_Not | SearchJsonQueryV2_StartsWith | SearchJsonQueryV2_ContainsAllTermsInOrder | SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm | SearchJsonQueryV2_ContainsAnyTerm | SearchJsonQueryV2_ContainsAllTerms | SearchJsonQueryV2_WithinDistanceOf | SearchJsonQueryV2_WithinBoundingBox | SearchJsonQueryV2_IntersectsBoundingBox | SearchJsonQueryV2_DoesNotIntersectBoundingBox | SearchJsonQueryV2_WithinPolygon | SearchJsonQueryV2_IntersectsPolygon | SearchJsonQueryV2_DoesNotIntersectPolygon;

export const SearchJsonQueryV2 = {
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
    isStartsWith: isStartsWith,
    startsWith: startsWith,
    isContainsAllTermsInOrder: isContainsAllTermsInOrder,
    containsAllTermsInOrder: containsAllTermsInOrder,
    isContainsAllTermsInOrderPrefixLastTerm: isContainsAllTermsInOrderPrefixLastTerm,
    containsAllTermsInOrderPrefixLastTerm: containsAllTermsInOrderPrefixLastTerm,
    isContainsAnyTerm: isContainsAnyTerm,
    containsAnyTerm: containsAnyTerm,
    isContainsAllTerms: isContainsAllTerms,
    containsAllTerms: containsAllTerms,
    isWithinDistanceOf: isWithinDistanceOf,
    withinDistanceOf: withinDistanceOf,
    isWithinBoundingBox: isWithinBoundingBox,
    withinBoundingBox: withinBoundingBox,
    isIntersectsBoundingBox: isIntersectsBoundingBox,
    intersectsBoundingBox: intersectsBoundingBox,
    isDoesNotIntersectBoundingBox: isDoesNotIntersectBoundingBox,
    doesNotIntersectBoundingBox: doesNotIntersectBoundingBox,
    isWithinPolygon: isWithinPolygon,
    withinPolygon: withinPolygon,
    isIntersectsPolygon: isIntersectsPolygon,
    intersectsPolygon: intersectsPolygon,
    isDoesNotIntersectPolygon: isDoesNotIntersectPolygon,
    doesNotIntersectPolygon: doesNotIntersectPolygon,
    visit: visit,
};
