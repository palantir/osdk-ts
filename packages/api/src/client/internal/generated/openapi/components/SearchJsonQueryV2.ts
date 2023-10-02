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

export interface SearchJsonQueryV2_Gt extends GtQuery {
    type: "gt";
}

export interface SearchJsonQueryV2_Lte extends LteQuery {
    type: "lte";
}

export interface SearchJsonQueryV2_Gte extends GteQuery {
    type: "gte";
}

export interface SearchJsonQueryV2_Eq extends EqualsQuery {
    type: "eq";
}

export interface SearchJsonQueryV2_IsNull extends IsNullQuery {
    type: "isNull";
}

export interface SearchJsonQueryV2_Contains extends ContainsQuery {
    type: "contains";
}

export interface SearchJsonQueryV2_And extends AndQueryV2 {
    type: "and";
}

export interface SearchJsonQueryV2_Or extends OrQueryV2 {
    type: "or";
}

export interface SearchJsonQueryV2_Not extends NotQueryV2 {
    type: "not";
}

export interface SearchJsonQueryV2_StartsWith extends StartsWithQuery {
    type: "startsWith";
}

export interface SearchJsonQueryV2_ContainsAllTermsInOrder extends ContainsAllTermsInOrderQuery {
    type: "containsAllTermsInOrder";
}

export interface SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm extends ContainsAllTermsInOrderPrefixLastTerm {
    type: "containsAllTermsInOrderPrefixLastTerm";
}

export interface SearchJsonQueryV2_ContainsAnyTerm extends ContainsAnyTermQuery {
    type: "containsAnyTerm";
}

export interface SearchJsonQueryV2_ContainsAllTerms extends ContainsAllTermsQuery {
    type: "containsAllTerms";
}

export interface SearchJsonQueryV2_WithinDistanceOf extends WithinDistanceOfQuery {
    type: "withinDistanceOf";
}

export interface SearchJsonQueryV2_WithinBoundingBox extends WithinBoundingBoxQuery {
    type: "withinBoundingBox";
}

export interface SearchJsonQueryV2_IntersectsBoundingBox extends IntersectsBoundingBoxQuery {
    type: "intersectsBoundingBox";
}

export interface SearchJsonQueryV2_DoesNotIntersectBoundingBox extends DoesNotIntersectBoundingBoxQuery {
    type: "doesNotIntersectBoundingBox";
}

export interface SearchJsonQueryV2_WithinPolygon extends WithinPolygonQuery {
    type: "withinPolygon";
}

export interface SearchJsonQueryV2_IntersectsPolygon extends IntersectsPolygonQuery {
    type: "intersectsPolygon";
}

export interface SearchJsonQueryV2_DoesNotIntersectPolygon extends DoesNotIntersectPolygonQuery {
    type: "doesNotIntersectPolygon";
}

export type SearchJsonQueryV2 = SearchJsonQueryV2_Lt | SearchJsonQueryV2_Gt | SearchJsonQueryV2_Lte | SearchJsonQueryV2_Gte | SearchJsonQueryV2_Eq | SearchJsonQueryV2_IsNull | SearchJsonQueryV2_Contains | SearchJsonQueryV2_And | SearchJsonQueryV2_Or | SearchJsonQueryV2_Not | SearchJsonQueryV2_StartsWith | SearchJsonQueryV2_ContainsAllTermsInOrder | SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm | SearchJsonQueryV2_ContainsAnyTerm | SearchJsonQueryV2_ContainsAllTerms | SearchJsonQueryV2_WithinDistanceOf | SearchJsonQueryV2_WithinBoundingBox | SearchJsonQueryV2_IntersectsBoundingBox | SearchJsonQueryV2_DoesNotIntersectBoundingBox | SearchJsonQueryV2_WithinPolygon | SearchJsonQueryV2_IntersectsPolygon | SearchJsonQueryV2_DoesNotIntersectPolygon;
