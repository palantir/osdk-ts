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

import { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

/**
 * Defines where a variable's options should be sourced from in the ontology metadata.
 *
 * - "properties": Options come from the current object type's properties
 * - "links": Options come from the current object type's link types
 * - "linkedProperties": Options come from the LINKED object type's properties
 *   (requires a link to be selected first; the linked object type is determined by the selected link)
 */
export type VariableSource = "properties" | "links" | "linkedProperties";

/**
 * Context for filtering property options.
 */
export interface PropertyFilterContext {
  propertyApiName: string;
  propertyType: string;
}

/**
 * Function type for filtering which properties should appear in the dropdown.
 * Returns true if the property should be included in the options.
 */
export type PropertyFilterFn = (context: PropertyFilterContext) => boolean;

/**
 * Configuration for how a variable should be populated in the UI.
 */
export interface VariableSourceConfig {
  /**
   * Where the variable's options come from in the ontology metadata.
   */
  source: VariableSource;

  /**
   * Human-readable label for the selector UI.
   */
  label: string;

  /**
   * Optional filter function to constrain which options appear in the dropdown.
   * Only applicable for "properties" and "linkedProperties" sources.
   * If not provided, all options from the source are shown.
   */
  filter?: PropertyFilterFn;
}

/**
 * Context passed to shouldRender functions.
 */
export interface ShouldRenderContext {
  ontology: OntologyFullMetadata;
  objectTypeApiName: string;
}

/**
 * Function type for determining if a snippet should be rendered.
 */
export type ShouldRenderFn = (context: ShouldRenderContext) => boolean;

/**
 * Extended snippet definition that includes variable source information and render conditions.
 */
export interface ExtendedSnippetDef {
  variables: Record<string, "required" | "optional">;
  /**
   * Human-readable title for the snippet.
   * Used in the UI instead of the raw snippet name.
   */
  title?: string;
  /**
   * Human-readable description for the snippet.
   * Explains what the snippet does in more detail.
   */
  description?: string;
  /**
   * Maps variable names to their source configuration.
   * Only variables that need UI selectors should be included here.
   */
  variableSources?: Record<string, VariableSourceConfig>;
  /**
   * Function that determines if this snippet should be rendered.
   * If not provided, the snippet is always rendered.
   */
  shouldRender?: ShouldRenderFn;
}

/**
 * Type for the extended snippets spec that includes variable source information.
 */
export interface ExtendedSnippetsSpec {
  readonly version: number;
  readonly snippets: Record<string, ExtendedSnippetDef>;
}

/**
 * Helper type to add title, description, variableSources and shouldRender to existing snippet definitions.
 */
type WithExtensions<T> = T extends { readonly variables: infer V }
  ? {
      readonly variables: V;
      readonly title?: string;
      readonly description?: string;
      readonly variableSources?: Record<string, VariableSourceConfig>;
      readonly shouldRender?: ShouldRenderFn;
    }
  : T;

// ============================================================================
// Property filter functions
// ============================================================================

/**
 * Filter for geo properties (geopoint, geoshape, geohash).
 */
export const isGeoPropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return propertyType === "geopoint" || propertyType === "geoshape" || propertyType === "geohash";
};

/**
 * Filter for numeric properties (integer, double, long, float, decimal).
 */
export const isNumericPropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return (
    propertyType === "integer" ||
    propertyType === "double" ||
    propertyType === "long" ||
    propertyType === "float" ||
    propertyType === "decimal"
  );
};

/**
 * Filter for string properties.
 */
export const isStringPropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return propertyType === "string";
};

/**
 * Filter for timestamp/datetime properties.
 */
export const isTimestampPropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return propertyType === "timestamp" || propertyType === "datetime";
};

/**
 * Filter for date properties (date only, not timestamp).
 */
export const isDatePropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return propertyType === "date";
};

/**
 * Filter for date or timestamp properties.
 */
export const isDateOrTimestampPropertyFilter: PropertyFilterFn = ({ propertyType }) => {
  return propertyType === "date" || propertyType === "timestamp" || propertyType === "datetime";
};

/**
 * Extended version of OSDK_SNIPPETS_SPEC type with variableSources and shouldRender support.
 */
export type ExtendedOsdkSnippetsSpec = {
  readonly version: typeof OSDK_SNIPPETS_SPEC.version;
  readonly snippets: {
    [K in keyof typeof OSDK_SNIPPETS_SPEC.snippets]: WithExtensions<typeof OSDK_SNIPPETS_SPEC.snippets[K]>;
  };
};

// ============================================================================
// Helper functions for shouldRender conditions
// ============================================================================

/**
 * Check if the object type has any geo properties (geopoint, geoshape, geohash).
 */
function hasGeoProperty(context: ShouldRenderContext): boolean {
  const objectTypeMeta = context.ontology.objectTypes[context.objectTypeApiName];
  if (!objectTypeMeta?.objectType?.properties) return false;

  return Object.values(objectTypeMeta.objectType.properties).some((prop) => {
    const type = (prop.dataType as { type: string }).type;
    return type === "geopoint" || type === "geoshape" || type === "geohash";
  });
}

/**
 * Check if the object type has any link types.
 */
function hasLinks(context: ShouldRenderContext): boolean {
  const objectTypeMeta = context.ontology.objectTypes[context.objectTypeApiName];
  return (objectTypeMeta?.linkTypes?.length ?? 0) > 0;
}

/**
 * Check if the object type has any time series properties.
 */
function hasTimeSeriesProperty(context: ShouldRenderContext): boolean {
  const objectTypeMeta = context.ontology.objectTypes[context.objectTypeApiName];
  if (!objectTypeMeta?.objectType?.properties) return false;

  return Object.values(objectTypeMeta.objectType.properties).some((prop) => {
    const type = (prop.dataType as { type: string }).type;
    return type === "timeseries";
  });
}

/**
 * Check if the object type has any geotime series properties.
 */
function hasGeotimeSeriesProperty(context: ShouldRenderContext): boolean {
  const objectTypeMeta = context.ontology.objectTypes[context.objectTypeApiName];
  if (!objectTypeMeta?.objectType?.properties) return false;

  return Object.values(objectTypeMeta.objectType.properties).some((prop) => {
    const type = (prop.dataType as { type: string }).type;
    return type === "geotimeSeries" || type === "geotimeseries";
  });
}

// ============================================================================
// Extended OSDK_SNIPPETS_SPEC
// ============================================================================

/**
 * Extended OSDK_SNIPPETS_SPEC with variable source information and render conditions.
 *
 * This object is functionally identical to OSDK_SNIPPETS_SPEC but includes
 * additional fields:
 * - `variableSources`: Specifies where each variable's options come from
 * - `shouldRender`: Function that determines if the snippet should be shown
 *
 * Variable sources:
 * - "properties": Select from the current object type's properties
 * - "links": Select from the current object type's link types
 * - "linkedProperties": Select from the linked object type's properties
 *   (determined by the selected link)
 */
export const EXTENDED_OSDK_SNIPPETS_SPEC: ExtendedOsdkSnippetsSpec = {
  ...OSDK_SNIPPETS_SPEC,
  snippets: {
    ...OSDK_SNIPPETS_SPEC.snippets,

    // Object property snippets - property comes from current object type
    aggregationTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.aggregationTemplate,
      title: "Aggregation",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    approximateDistinctAggregationTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.approximateDistinctAggregationTemplate,
      title: "Approximate Distinct Aggregation",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    exactDistinctAggregationTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.exactDistinctAggregationTemplate,
      title: "Exact Distinct Aggregation",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    numericAggregationTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.numericAggregationTemplate,
      title: "Numeric Aggregation",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isNumericPropertyFilter },
      },
    },
    fixedWidthGroupByTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.fixedWidthGroupByTemplate,
      title: "Fixed Width Group By",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    durationGroupByTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.durationGroupByTemplate,
      title: "Duration Group By",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    exactGroupByTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.exactGroupByTemplate,
      title: "Exact Group By",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    rangeGroupByTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.rangeGroupByTemplate,
      title: "Range Group By",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },

    // Filter snippets - property comes from current object type
    equalityTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.equalityTemplate,
      title: "Equality Filter",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    inFilterTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.inFilterTemplate,
      title: "In Filter",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    nullTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.nullTemplate,
      title: "Null Filter",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    rangeTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.rangeTemplate,
      title: "Range Filter",
      variableSources: {
        property: { source: "properties", label: "Property" },
      },
    },
    containsTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.containsTemplate,
      title: "Contains Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isStringPropertyFilter },
      },
    },
    stringStartsWithTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.stringStartsWithTemplate,
      title: "Starts With Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isStringPropertyFilter },
      },
    },
    containsAllTermsInOrderTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.containsAllTermsInOrderTemplate,
      title: "Contains All Terms In Order",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isStringPropertyFilter },
      },
    },
    containsAnyTermTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.containsAnyTermTemplate,
      title: "Contains Any Term",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isStringPropertyFilter },
      },
    },
    containsAllTermsTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.containsAllTermsTemplate,
      title: "Contains All Terms",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isStringPropertyFilter },
      },
    },

    // Geo filter snippets - only render if object type has geo properties
    withinDistanceTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.withinDistanceTemplate,
      title: "Within Distance Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isGeoPropertyFilter },
      },
      shouldRender: hasGeoProperty,
    },
    withinBoundingBoxTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.withinBoundingBoxTemplate,
      title: "Within Bounding Box Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isGeoPropertyFilter },
      },
      shouldRender: hasGeoProperty,
    },
    withinPolygonTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.withinPolygonTemplate,
      title: "Within Polygon Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isGeoPropertyFilter },
      },
      shouldRender: hasGeoProperty,
    },
    intersectsPolygonTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.intersectsPolygonTemplate,
      title: "Intersects Polygon Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isGeoPropertyFilter },
      },
      shouldRender: hasGeoProperty,
    },
    intersectsBboxTemplate: {
      ...OSDK_SNIPPETS_SPEC.snippets.intersectsBboxTemplate,
      title: "Intersects Bounding Box Filter",
      variableSources: {
        property: { source: "properties", label: "Property", filter: isGeoPropertyFilter },
      },
      shouldRender: hasGeoProperty,
    },

    // Time series snippets - only render if object type has time series properties
    loadTimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadTimeSeriesPointsSnippet,
      title: "Load Time Series Points",
      shouldRender: hasTimeSeriesProperty,
    },
    loadRelativeTimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadRelativeTimeSeriesPointsSnippet,
      title: "Load Relative Time Series Points",
      shouldRender: hasTimeSeriesProperty,
    },
    loadAbsoluteTimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadAbsoluteTimeSeriesPointsSnippet,
      title: "Load Absolute Time Series Points",
      shouldRender: hasTimeSeriesProperty,
    },
    loadTimeSeriesFirstPointSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadTimeSeriesFirstPointSnippet,
      title: "Load Time Series First Point",
      shouldRender: hasTimeSeriesProperty,
    },
    loadTimeSeriesLastPointSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadTimeSeriesLastPointSnippet,
      title: "Load Time Series Last Point",
      shouldRender: hasTimeSeriesProperty,
    },

    // Geotime series snippets - only render if object type has geotime series properties
    loadGeotimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadGeotimeSeriesPointsSnippet,
      title: "Load Geotime Series Points",
      shouldRender: hasGeotimeSeriesProperty,
    },
    loadRelativeGeotimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadRelativeGeotimeSeriesPointsSnippet,
      title: "Load Relative Geotime Series Points",
      shouldRender: hasGeotimeSeriesProperty,
    },
    loadAbsoluteGeotimeSeriesPointsSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadAbsoluteGeotimeSeriesPointsSnippet,
      title: "Load Absolute Geotime Series Points",
      shouldRender: hasGeotimeSeriesProperty,
    },
    loadGeotimeSeriesLastPointSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadGeotimeSeriesLastPointSnippet,
      title: "Load Geotime Series Last Point",
      shouldRender: hasGeotimeSeriesProperty,
    },

    // Link-based snippets - only render if object type has links
    loadLinkedObjectReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadLinkedObjectReference,
      title: "Load Linked Object",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
      },
      shouldRender: hasLinks,
    },
    loadLinkedObjectsReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadLinkedObjectsReference,
      title: "Load Linked Objects",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
      },
      shouldRender: hasLinks,
    },
    searchAround: {
      ...OSDK_SNIPPETS_SPEC.snippets.searchAround,
      title: "Search Around",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
      },
      shouldRender: hasLinks,
    },

    // Derived property snippets - linkApiName from links, property from LINKED object type
    derivedPropertyBaseExample: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyBaseExample,
      title: "Derived Property - Base Example",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyApproximateDistinctAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyApproximateDistinctAggregation,
      title: "Derived Property - Approximate Distinct",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyExactDistinctAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyExactDistinctAggregation,
      title: "Derived Property - Exact Distinct",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyCollectToListAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyCollectToListAggregation,
      title: "Derived Property - Collect to List",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyCollectToSetAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyCollectToSetAggregation,
      title: "Derived Property - Collect to Set",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyCountAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyCountAggregation,
      title: "Derived Property - Count",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertySelectPropertyAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertySelectPropertyAggregation,
      title: "Derived Property - Select Property",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property" },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyApproximatePercentileAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyApproximatePercentileAggregation,
      title: "Derived Property - Approximate Percentile",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property", filter: isNumericPropertyFilter },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyNumericAggregation: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyNumericAggregation,
      title: "Derived Property - Numeric Aggregation",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property", filter: isNumericPropertyFilter },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyNumericExpression: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyNumericExpression,
      title: "Derived Property - Numeric Expression",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property", filter: isNumericPropertyFilter },
      },
      shouldRender: hasLinks,
    },
    derivedPropertyDatetimeExpression: {
      ...OSDK_SNIPPETS_SPEC.snippets.derivedPropertyDatetimeExpression,
      title: "Derived Property - Datetime Expression",
      variableSources: {
        linkApiName: { source: "links", label: "Link" },
        property: { source: "linkedProperties", label: "Linked Property", filter: isDateOrTimestampPropertyFilter },
      },
      shouldRender: hasLinks,
    },

    // ========================================================================
    // Action snippets
    // ========================================================================
    applyAction: {
      ...OSDK_SNIPPETS_SPEC.snippets.applyAction,
      title: "Apply Action",
      description: "Execute a single action with the specified parameters.",
    },
    batchApplyAction: {
      ...OSDK_SNIPPETS_SPEC.snippets.batchApplyAction,
      title: "Batch Apply Action",
      description: "Execute an action with multiple parameter sets in batch mode.",
    },
    uploadAttachment: {
      ...OSDK_SNIPPETS_SPEC.snippets.uploadAttachment,
      title: "Upload Attachment",
      description: "Upload an attachment file to be used with an action parameter.",
    },
    uploadMedia: {
      ...OSDK_SNIPPETS_SPEC.snippets.uploadMedia,
      title: "Upload Media",
      description: "Upload media content for use in an action.",
    },
    uploadMediaOntologyEdits: {
      ...OSDK_SNIPPETS_SPEC.snippets.uploadMediaOntologyEdits,
      title: "Upload Media with Ontology Edits",
      description: "Upload media content and apply ontology edits.",
    },
    readMedia: {
      ...OSDK_SNIPPETS_SPEC.snippets.readMedia,
      title: "Read Media",
      description: "Read and retrieve media content from an object.",
    },

    // ========================================================================
    // Query/Function snippets
    // ========================================================================
    executeFunction: {
      ...OSDK_SNIPPETS_SPEC.snippets.executeFunction,
      title: "Execute Function",
      description: "Call a Foundry function with input parameters and get results.",
    },

    // ========================================================================
    // Interface snippets
    // ========================================================================
    loadInterfacesReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadInterfacesReference,
      title: "Load Interfaces",
      description: "Load objects that implement the specified interface.",
    },
    loadAllInterfacesReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadAllInterfacesReference,
      title: "Load All Interfaces",
      description: "Load all objects that implement the specified interface.",
    },
    loadOrderedInterfacesReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadOrderedInterfacesReference,
      title: "Load Ordered Interfaces",
      description: "Load objects that implement the interface, ordered by a property.",
    },
    searchInterfacesReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.searchInterfacesReference,
      title: "Search Interfaces",
      description: "Search for objects implementing the interface using property filters.",
    },
    loadInterfaceMetadataSnippet: {
      ...OSDK_SNIPPETS_SPEC.snippets.loadInterfaceMetadataSnippet,
      title: "Load Interface Metadata",
      description: "Retrieve metadata about the interface definition.",
    },
    castInterfaceToObjectReference: {
      ...OSDK_SNIPPETS_SPEC.snippets.castInterfaceToObjectReference,
      title: "Cast Interface to Object",
      description: "Cast an interface instance to a specific object type.",
    },
  },
};

/**
 * Get variable source configuration for a snippet.
 */
export function getVariableSources(
  spec: ExtendedOsdkSnippetsSpec,
  snippetName: string,
): Record<string, VariableSourceConfig> | undefined {
  const snippetDef = spec.snippets[snippetName as keyof typeof spec.snippets];
  return snippetDef?.variableSources;
}

/**
 * Check if a snippet should be rendered based on its shouldRender function.
 * Returns true if no shouldRender function is defined.
 */
export function checkShouldRender(
  spec: ExtendedOsdkSnippetsSpec,
  snippetName: string,
  context: ShouldRenderContext,
): boolean {
  const snippetDef = spec.snippets[snippetName as keyof typeof spec.snippets];
  if (!snippetDef?.shouldRender) {
    return true; // No condition means always render
  }
  return snippetDef.shouldRender(context);
}

/**
 * Get the human-readable title for a snippet.
 * Returns the title if defined, otherwise returns the snippet name.
 */
export function getSnippetTitle(
  spec: ExtendedOsdkSnippetsSpec,
  snippetName: string,
): string {
  const snippetDef = spec.snippets[snippetName as keyof typeof spec.snippets];
  return snippetDef?.title ?? snippetName;
}

/**
 * Get the human-readable description for a snippet.
 * Returns the description if defined, otherwise returns undefined.
 */
export function getSnippetDescription(
  spec: ExtendedOsdkSnippetsSpec,
  snippetName: string,
): string | undefined {
  const snippetDef = spec.snippets[snippetName as keyof typeof spec.snippets];
  return snippetDef?.description;
}
