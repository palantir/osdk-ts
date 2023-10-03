/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AndQueryV2 } from "./AndQueryV2";
import type { ContainsAllTermsInOrderPrefixLastTerm } from "./ContainsAllTermsInOrderPrefixLastTerm";
import type { ContainsAllTermsInOrderQuery } from "./ContainsAllTermsInOrderQuery";
import type { ContainsAllTermsQuery } from "./ContainsAllTermsQuery";
import type { ContainsAnyTermQuery } from "./ContainsAnyTermQuery";
import type { ContainsQuery } from "./ContainsQuery";
import type { DoesNotIntersectBoundingBoxQuery } from "./DoesNotIntersectBoundingBoxQuery";
import type { DoesNotIntersectPolygonQuery } from "./DoesNotIntersectPolygonQuery";
import type { EqualsQuery } from "./EqualsQuery";
import type { GteQuery } from "./GteQuery";
import type { GtQuery } from "./GtQuery";
import type { IntersectsBoundingBoxQuery } from "./IntersectsBoundingBoxQuery";
import type { IntersectsPolygonQuery } from "./IntersectsPolygonQuery";
import type { IsNullQuery } from "./IsNullQuery";
import type { LteQuery } from "./LteQuery";
import type { LtQuery } from "./LtQuery";
import type { NotQueryV2 } from "./NotQueryV2";
import type { OrQueryV2 } from "./OrQueryV2";
import type { StartsWithQuery } from "./StartsWithQuery";
import type { WithinBoundingBoxQuery } from "./WithinBoundingBoxQuery";
import type { WithinDistanceOfQuery } from "./WithinDistanceOfQuery";
import type { WithinPolygonQuery } from "./WithinPolygonQuery";

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

export interface SearchJsonQueryV2_ContainsAllTermsInOrder
  extends ContainsAllTermsInOrderQuery
{
  type: "containsAllTermsInOrder";
}

export interface SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm
  extends ContainsAllTermsInOrderPrefixLastTerm
{
  type: "containsAllTermsInOrderPrefixLastTerm";
}

export interface SearchJsonQueryV2_ContainsAnyTerm
  extends ContainsAnyTermQuery
{
  type: "containsAnyTerm";
}

export interface SearchJsonQueryV2_ContainsAllTerms
  extends ContainsAllTermsQuery
{
  type: "containsAllTerms";
}

export interface SearchJsonQueryV2_WithinDistanceOf
  extends WithinDistanceOfQuery
{
  type: "withinDistanceOf";
}

export interface SearchJsonQueryV2_WithinBoundingBox
  extends WithinBoundingBoxQuery
{
  type: "withinBoundingBox";
}

export interface SearchJsonQueryV2_IntersectsBoundingBox
  extends IntersectsBoundingBoxQuery
{
  type: "intersectsBoundingBox";
}

export interface SearchJsonQueryV2_DoesNotIntersectBoundingBox
  extends DoesNotIntersectBoundingBoxQuery
{
  type: "doesNotIntersectBoundingBox";
}

export interface SearchJsonQueryV2_WithinPolygon extends WithinPolygonQuery {
  type: "withinPolygon";
}

export interface SearchJsonQueryV2_IntersectsPolygon
  extends IntersectsPolygonQuery
{
  type: "intersectsPolygon";
}

export interface SearchJsonQueryV2_DoesNotIntersectPolygon
  extends DoesNotIntersectPolygonQuery
{
  type: "doesNotIntersectPolygon";
}

export type SearchJsonQueryV2 =
  | SearchJsonQueryV2_Lt
  | SearchJsonQueryV2_Gt
  | SearchJsonQueryV2_Lte
  | SearchJsonQueryV2_Gte
  | SearchJsonQueryV2_Eq
  | SearchJsonQueryV2_IsNull
  | SearchJsonQueryV2_Contains
  | SearchJsonQueryV2_And
  | SearchJsonQueryV2_Or
  | SearchJsonQueryV2_Not
  | SearchJsonQueryV2_StartsWith
  | SearchJsonQueryV2_ContainsAllTermsInOrder
  | SearchJsonQueryV2_ContainsAllTermsInOrderPrefixLastTerm
  | SearchJsonQueryV2_ContainsAnyTerm
  | SearchJsonQueryV2_ContainsAllTerms
  | SearchJsonQueryV2_WithinDistanceOf
  | SearchJsonQueryV2_WithinBoundingBox
  | SearchJsonQueryV2_IntersectsBoundingBox
  | SearchJsonQueryV2_DoesNotIntersectBoundingBox
  | SearchJsonQueryV2_WithinPolygon
  | SearchJsonQueryV2_IntersectsPolygon
  | SearchJsonQueryV2_DoesNotIntersectPolygon;
