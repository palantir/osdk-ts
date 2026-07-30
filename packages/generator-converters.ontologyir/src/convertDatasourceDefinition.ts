/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ObjectTypeDatasourceDefinition,
  OntologyIrObjectTypeDatasourceDefinition,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

import { consola } from "consola";
import {
  convertColumnMapping,
  convertPropertyMapping,
} from "./convertPropertyMapping.js";

/**
 * A derived-properties `definition` as carried by either the block-data
 * (`DerivedPropertiesDefinition`) or IR (`OntologyIrDerivedPropertiesDefinition`)
 * datasource. Both families share the same discriminators and nest the backed
 * property references as the keys of a `propertyTypeMapping` record, so this
 * structural shape covers both without depending on the (partially unexported)
 * generated type names.
 */
type DerivedDefinitionLike =
  | {
    type: "linkedProperties";
    linkedProperties: { propertyTypeMapping: Record<string, unknown> };
  }
  | {
    type: "aggregatedProperties";
    aggregatedProperties: { propertyTypeMapping: Record<string, unknown> };
  }
  | { type: "deleted"; deleted: { propertyTypes: string[] } };

/**
 * The backed derived-property names for a derived datasource. In block-data the
 * mapping keys/rids are property rids (resolved to api names via `toApiName`);
 * in IR they are already api names (`toApiName` is an identity fallback there).
 * The `deleted` variant lists its property references directly rather than as
 * mapping keys.
 */
function derivedPropertyNames(
  definition: DerivedDefinitionLike,
  toApiName: (key: string) => string,
): string[] {
  switch (definition.type) {
    case "linkedProperties":
      return Object.keys(definition.linkedProperties.propertyTypeMapping).map(
        toApiName,
      );
    case "aggregatedProperties":
      return Object.keys(definition.aggregatedProperties.propertyTypeMapping)
        .map(toApiName);
    case "deleted":
      return definition.deleted.propertyTypes.map(toApiName);
    default: {
      const _: never = definition;
      return [];
    }
  }
}

/**
 * Convert a block-data object type datasource definition to the platform wire
 * format. Property references (`propertyMapping` keys and `properties` arrays)
 * are property rids, resolved to api names via `propRidToApiName`, falling back
 * to the raw rid when unmapped. Variants with no public wire counterpart
 * (`media`, `restrictedStream`, `derived`) map to the `unsupported` datasource,
 * preserving their backed property names where available.
 */
export function convertBlockDataDatasourceDefinition(
  def: ObjectTypeDatasourceDefinition,
  propRidToApiName: Record<string, string>,
): Ontologies.ObjectTypeDatasourceDefinition {
  const sourceType: string = def.type;
  const toApiName = (key: string) => propRidToApiName[key] ?? key;
  switch (def.type) {
    case "dataset":
      return {
        type: "dataset",
        datasetRid: def.dataset.datasetRid,
        branch: def.dataset.branchId,
        propertyMapping: convertColumnMapping(
          def.dataset.propertyMapping,
          toApiName,
        ),
      };
    case "datasetV2":
      return {
        type: "dataset",
        datasetRid: def.datasetV2.datasetRid,
        branch: def.datasetV2.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV2.propertyMapping,
          toApiName,
        ),
      };
    case "datasetV3":
      return {
        type: "dataset",
        datasetRid: def.datasetV3.datasetRid,
        branch: def.datasetV3.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV3.propertyMapping,
          toApiName,
        ),
      };
    case "stream":
      return {
        type: "stream",
        streamRid: def.stream.streamLocator.streamLocatorRid,
        branch: def.stream.streamLocator.branchId,
        propertyMapping: convertColumnMapping(
          def.stream.propertyMapping,
          toApiName,
        ),
      };
    case "streamV2":
      return {
        type: "stream",
        streamRid: def.streamV2.streamLocator.streamLocatorRid,
        branch: def.streamV2.streamLocator.branchId,
        propertyMapping: convertColumnMapping(
          def.streamV2.propertyMapping,
          toApiName,
        ),
      };
    case "streamV3":
      return {
        type: "stream",
        streamRid: def.streamV3.streamLocator.streamLocatorRid,
        branch: def.streamV3.streamLocator.branchId,
        propertyMapping: convertPropertyMapping(
          def.streamV3.propertyMapping,
          toApiName,
        ),
      };
    case "restrictedView":
      return {
        type: "restrictedView",
        restrictedViewRid: def.restrictedView.restrictedViewRid,
        propertyMapping: convertColumnMapping(
          def.restrictedView.propertyMapping,
          toApiName,
        ),
      };
    case "restrictedViewV2":
      return {
        type: "restrictedView",
        restrictedViewRid: def.restrictedViewV2.restrictedViewRid,
        propertyMapping: convertPropertyMapping(
          def.restrictedViewV2.propertyMapping,
          toApiName,
        ),
      };
    case "timeSeries":
      return {
        type: "timeSeries",
        timeSeriesSyncRid: def.timeSeries.timeSeriesSyncRid,
        properties: def.timeSeries.properties.map(toApiName),
      };
    case "mediaSetView":
      return {
        type: "mediaSetView",
        mediaSetViewRid: def.mediaSetView.mediaSetViewLocator.mediaSetViewRid,
        properties: def.mediaSetView.properties.map(toApiName),
      };
    case "geotimeSeries":
      return {
        type: "geotimeSeries",
        geotimeSeriesIntegrationRid:
          def.geotimeSeries.geotimeSeriesIntegrationRid,
        properties: def.geotimeSeries.properties.map(toApiName),
      };
    case "table":
      return {
        type: "table",
        tableRid: def.table.tableRid,
        branch: def.table.branchId,
        propertyMapping: convertPropertyMapping(
          def.table.propertyMapping,
          toApiName,
        ),
      };
    case "editsOnly":
      return { type: "editsOnly" };
    case "direct":
      return {
        type: "direct",
        directSourceRid: def.direct.directSourceRid,
        propertyMapping: convertPropertyMapping(
          def.direct.propertyMapping,
          toApiName,
        ),
      };
    case "media":
      return {
        type: "unsupported",
        unsupportedType: def.type,
        properties: def.media.properties.map(toApiName),
      };
    case "restrictedStream":
      return {
        type: "unsupported",
        unsupportedType: def.type,
        properties: Object.keys(def.restrictedStream.propertyMapping).map(
          toApiName,
        ),
      };
    case "derived":
      return {
        type: "unsupported",
        unsupportedType: def.type,
        properties: derivedPropertyNames(def.derived.definition, toApiName),
      };
    default: {
      // Any block-data datasource variant with no public wire counterpart
      // degrades to `unsupported` rather than failing generation. The `never`
      // guard makes a future variant a compile error here so this stays a
      // conscious decision rather than a silent gap.
      const _: never = def;
      consola.warn(
        `Unknown block-data datasource variant "${sourceType}"; `
          + `degrading to unsupported.`,
      );
      return {
        type: "unsupported",
        unsupportedType: sourceType,
        properties: [],
      };
    }
  }
}

/**
 * Convert an IR object type datasource definition to the platform wire format.
 * IR property references are already api names (`toApiName` is an identity
 * fallback). Variants with no public wire counterpart (`restrictedStream`,
 * `derived`) map to the `unsupported` datasource, preserving their backed
 * property names where available.
 */
export function convertIrDatasourceDefinition(
  def: OntologyIrObjectTypeDatasourceDefinition,
  propRidToApiName: Record<string, string>,
): Ontologies.ObjectTypeDatasourceDefinition {
  const sourceType: string = def.type;
  const toApiName = (key: string) => propRidToApiName[key] ?? key;
  switch (def.type) {
    case "datasetV2":
      return {
        type: "dataset",
        datasetRid: def.datasetV2.datasetRid,
        propertyMapping: convertPropertyMapping(
          def.datasetV2.propertyMapping,
          toApiName,
        ),
      };
    case "datasetV3":
      return {
        type: "dataset",
        datasetRid: def.datasetV3.datasetRid,
        branch: def.datasetV3.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV3.propertyMapping,
          toApiName,
        ),
      };
    case "streamV2":
      return {
        type: "stream",
        streamRid: def.streamV2.streamLocator,
        propertyMapping: convertColumnMapping(
          def.streamV2.propertyMapping,
          toApiName,
        ),
      };
    case "streamV3":
      return {
        type: "stream",
        streamRid: def.streamV3.streamLocator,
        propertyMapping: convertPropertyMapping(
          def.streamV3.propertyMapping,
          toApiName,
        ),
      };
    case "restrictedViewV2":
      return {
        type: "restrictedView",
        restrictedViewRid: def.restrictedViewV2.restrictedViewRid,
        propertyMapping: convertPropertyMapping(
          def.restrictedViewV2.propertyMapping,
          toApiName,
        ),
      };
    case "timeSeries":
      return {
        type: "timeSeries",
        timeSeriesSyncRid: def.timeSeries.timeSeriesSyncRid,
        properties: def.timeSeries.properties,
      };
    case "mediaSetView":
      return {
        type: "mediaSetView",
        mediaSetViewRid: def.mediaSetView.mediaSetViewLocator,
        properties: def.mediaSetView.properties,
      };
    case "geotimeSeries":
      return {
        type: "geotimeSeries",
        geotimeSeriesIntegrationRid:
          def.geotimeSeries.geotimeSeriesIntegrationRid,
        properties: def.geotimeSeries.properties,
      };
    case "table":
      return {
        type: "table",
        tableRid: def.table.tableRid,
        branch: def.table.branchId,
        propertyMapping: convertPropertyMapping(
          def.table.propertyMapping,
          toApiName,
        ),
      };
    case "editsOnly":
      return { type: "editsOnly" };
    case "direct":
      return {
        type: "direct",
        directSourceRid: def.direct.directSourceRid,
        propertyMapping: convertPropertyMapping(
          def.direct.propertyMapping,
          toApiName,
        ),
      };
    case "restrictedStream":
      return {
        type: "unsupported",
        unsupportedType: def.type,
        properties: Object.keys(def.restrictedStream.propertyMapping),
      };
    case "derived":
      return {
        type: "unsupported",
        unsupportedType: def.type,
        properties: derivedPropertyNames(def.derived.definition, toApiName),
      };
    default: {
      // Any IR datasource variant with no public wire counterpart degrades to
      // `unsupported` rather than failing generation. The `never` guard makes a
      // future variant a compile error here so this stays a conscious decision
      // rather than a silent gap.
      const _: never = def;
      consola.warn(
        `Unknown IR datasource variant "${sourceType}"; `
          + `degrading to unsupported.`,
      );
      return {
        type: "unsupported",
        unsupportedType: sourceType,
        properties: [],
      };
    }
  }
}
