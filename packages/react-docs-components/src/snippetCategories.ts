/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Categorization of documentation snippets by their target type
 */
export const SNIPPET_CATEGORIES = {
  /**
   * Snippets for Object Type documentation
   */
  objectType: [
    // Loading objects
    "loadSingleObjectGuide",
    "loadSingleObjectReference",
    "loadObjectPageGuide",
    "loadObjectsReference",
    "loadAllObjectsReference",
    "orderObjectsGuide",
    "searchObjectsGuide",

    // Linked objects
    "loadLinkedObjectReference",
    "loadLinkedObjectsReference",
    "searchAround",

    // Aggregations
    "aggregationTemplate",
    "countAggregationTemplate",
    "approximateDistinctAggregationTemplate",
    "exactDistinctAggregationTemplate",
    "numericAggregationTemplate",

    // Group by
    "fixedWidthGroupByTemplate",
    "durationGroupByTemplate",
    "exactGroupByTemplate",
    "rangeGroupByTemplate",

    // Filters
    "equalityTemplate",
    "inFilterTemplate",
    "nullTemplate",
    "rangeTemplate",
    "containsTemplate",
    "stringStartsWithTemplate",
    "containsAllTermsInOrderTemplate",
    "containsAnyTermTemplate",
    "containsAllTermsTemplate",

    // Geo filters
    "withinDistanceTemplate",
    "withinBoundingBoxTemplate",
    "withinPolygonTemplate",
    "intersectsPolygonTemplate",
    "intersectsBboxTemplate",

    // Logical operators
    "notTemplate",
    "andTemplate",
    "orTemplate",

    // Time series
    "loadTimeSeriesPointsSnippet",
    "loadRelativeTimeSeriesPointsSnippet",
    "loadAbsoluteTimeSeriesPointsSnippet",
    "loadTimeSeriesFirstPointSnippet",
    "loadTimeSeriesLastPointSnippet",

    // Geotime series
    "loadGeotimeSeriesPointsSnippet",
    "loadRelativeGeotimeSeriesPointsSnippet",
    "loadAbsoluteGeotimeSeriesPointsSnippet",
    "loadGeotimeSeriesLastPointSnippet",

    // Object set operations
    "objectSetOperationsGuide",
    "objectSetOperationsUnion",
    "objectSetOperationsSubtract",
    "objectSetOperationsIntersect",

    // Metadata
    "loadObjectMetadataSnippet",

    // Subscriptions
    "subscribeToObjectSetInstructions",

    // Derived properties
    "derivedPropertyBaseExample",
    "derivedPropertyApproximateDistinctAggregation",
    "derivedPropertyExactDistinctAggregation",
    "derivedPropertyCollectToListAggregation",
    "derivedPropertyCollectToSetAggregation",
    "derivedPropertyCountAggregation",
    "derivedPropertySelectPropertyAggregation",
    "derivedPropertyApproximatePercentileAggregation",
    "derivedPropertyNumericAggregation",
    "derivedPropertyNumericExpression",
    "derivedPropertyDatetimeExpression",

    // Vector/AI search
    "nearestNeighborsTextQuery",
    "nearestNeighborsVectorQuery",
  ],

  /**
   * Snippets for Action Type documentation
   */
  actionType: [
    "applyAction",
    "batchApplyAction",
  ],

  /**
   * Snippets for Query/Function documentation
   */
  queryType: [
    "executeFunction",
  ],

  /**
   * Snippets for Interface Type documentation
   */
  interfaceType: [
    "loadInterfacesReference",
    "loadAllInterfacesReference",
    "loadOrderedInterfacesReference",
    "searchInterfacesReference",
    "castInterfaceToObjectReference",
    "loadInterfaceMetadataSnippet",
  ],

  /**
   * Snippets that are currently unused or deprecated
   */
  unused: [] as string[],
} as const;

export type SnippetCategory = keyof typeof SNIPPET_CATEGORIES;
