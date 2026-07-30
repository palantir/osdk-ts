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
  DerivedPropertiesDefinition,
  ObjectTypeDatasourceDefinition,
  OntologyIrDerivedPropertiesDefinition,
  OntologyIrObjectTypeDatasourceDefinition,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { consola } from "consola";

import type { ApiName } from "./ApiName.js";
import type { ResolvePropertyApiName } from "./convertPropertyMapping.js";
import {
  convertColumnMapping,
  convertPropertyMapping,
} from "./convertPropertyMapping.js";

/**
 * The `unsupportedType` the platform emits for derived-properties datasources,
 * which have no wire variant. Intentionally differs from the OMS variant name
 * (`derived`).
 */
const DERIVED_PROPERTIES_UNSUPPORTED_TYPE = "derivedProperties";

/**
 * Convert a block-data datasource definition to the platform wire format.
 * Block-data carries real resource rids, so they are used directly; property
 * rids are resolved to api names. Variants with no public wire counterpart
 * (`media`, `restrictedStream`, `derived`) degrade to `unsupported`.
 */
export function convertBlockDataDatasourceDefinition(
  def: ObjectTypeDatasourceDefinition,
  resolveApiName: ResolvePropertyApiName,
): Ontologies.ObjectTypeDatasourceDefinition {
  const sourceType: string = def.type;
  switch (def.type) {
    case "dataset":
      return {
        type: "dataset",
        datasetRid: def.dataset.datasetRid,
        branch: def.dataset.branchId,
        propertyMapping: convertColumnMapping(
          def.dataset.propertyMapping,
          resolveApiName,
        ),
      };
    case "datasetV2":
      return {
        type: "dataset",
        datasetRid: def.datasetV2.datasetRid,
        branch: def.datasetV2.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "datasetV3":
      return {
        type: "dataset",
        datasetRid: def.datasetV3.datasetRid,
        branch: def.datasetV3.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV3.propertyMapping,
          resolveApiName,
        ),
      };
    case "stream":
      return {
        type: "stream",
        streamRid: def.stream.streamLocator.streamLocatorRid,
        branch: def.stream.streamLocator.branchId,
        propertyMapping: convertColumnMapping(
          def.stream.propertyMapping,
          resolveApiName,
        ),
      };
    case "streamV2":
      return {
        type: "stream",
        streamRid: def.streamV2.streamLocator.streamLocatorRid,
        branch: def.streamV2.streamLocator.branchId,
        propertyMapping: convertColumnMapping(
          def.streamV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "streamV3":
      return {
        type: "stream",
        streamRid: def.streamV3.streamLocator.streamLocatorRid,
        branch: def.streamV3.streamLocator.branchId,
        propertyMapping: convertPropertyMapping(
          def.streamV3.propertyMapping,
          resolveApiName,
        ),
      };
    case "restrictedView":
      return {
        type: "restrictedView",
        restrictedViewRid: def.restrictedView.restrictedViewRid,
        propertyMapping: convertColumnMapping(
          def.restrictedView.propertyMapping,
          resolveApiName,
        ),
      };
    case "restrictedViewV2":
      return {
        type: "restrictedView",
        restrictedViewRid: def.restrictedViewV2.restrictedViewRid,
        propertyMapping: convertPropertyMapping(
          def.restrictedViewV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "timeSeries":
      return {
        type: "timeSeries",
        timeSeriesSyncRid: def.timeSeries.timeSeriesSyncRid,
        properties: resolveApiNames(def.timeSeries.properties, resolveApiName),
      };
    case "mediaSetView":
      return {
        type: "mediaSetView",
        mediaSetViewRid: def.mediaSetView.mediaSetViewLocator.mediaSetViewRid,
        properties: resolveApiNames(
          def.mediaSetView.properties,
          resolveApiName,
        ),
      };
    case "geotimeSeries":
      return {
        type: "geotimeSeries",
        geotimeSeriesIntegrationRid:
          def.geotimeSeries.geotimeSeriesIntegrationRid,
        properties: resolveApiNames(
          def.geotimeSeries.properties,
          resolveApiName,
        ),
      };
    case "table":
      return {
        type: "table",
        tableRid: def.table.tableRid,
        branch: def.table.branchId,
        propertyMapping: convertPropertyMapping(
          def.table.propertyMapping,
          resolveApiName,
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
          resolveApiName,
        ),
      };
    case "media":
      // Carries media source rids rather than a media set view rid, so it
      // cannot be collapsed onto `mediaSetView`.
      return unsupportedDatasource(
        def.type,
        resolveApiNames(def.media.properties, resolveApiName),
      );
    case "restrictedStream":
      return unsupportedDatasource(
        def.type,
        resolveApiNames(
          Object.keys(def.restrictedStream.propertyMapping),
          resolveApiName,
        ),
      );
    case "derived":
      return unsupportedDatasource(
        DERIVED_PROPERTIES_UNSUPPORTED_TYPE,
        derivedPropertyNames(def.derived.definition, resolveApiName),
      );
    default: {
      // Degrade rather than fail generation. The `never` guard makes a future
      // variant a compile error here. The platform emits `unknown` for a
      // variant it does not recognize; the raw name is emitted instead so it
      // survives in the generated metadata rather than only in this warning.
      const _: never = def;
      consola.warn(
        `Unknown block-data datasource variant "${sourceType}"; `
          + `degrading to unsupported.`,
      );
      return unsupportedDatasource(sourceType, []);
    }
  }
}

/**
 * Convert an IR datasource definition to the platform wire format.
 *
 * The IR identifies most backing resources by ontology-as-code input name
 * (`DataSetName`, `StreamName`, …), so their wire rids are stable placeholders,
 * consistent with the other synthesized rids in the IR converter. Variants
 * with no public wire counterpart degrade to `unsupported`.
 *
 * IR property references are already api names; those not naming a property of
 * the object type are dropped.
 */
export function convertIrDatasourceDefinition(
  def: OntologyIrObjectTypeDatasourceDefinition,
  resolveApiName: ResolvePropertyApiName,
): Ontologies.ObjectTypeDatasourceDefinition {
  const sourceType: string = def.type;
  switch (def.type) {
    case "table":
      return {
        type: "table",
        tableRid: def.table.tableRid,
        branch: def.table.branchId,
        propertyMapping: convertPropertyMapping(
          def.table.propertyMapping,
          resolveApiName,
        ),
      };
    case "editsOnly":
      return { type: "editsOnly" };
    case "datasetV2":
      return {
        type: "dataset",
        datasetRid: `ri.dataset.${def.datasetV2.datasetRid}`,
        propertyMapping: convertPropertyMapping(
          def.datasetV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "datasetV3":
      return {
        type: "dataset",
        datasetRid: `ri.dataset.${def.datasetV3.datasetRid}`,
        branch: def.datasetV3.branchId,
        propertyMapping: convertPropertyMapping(
          def.datasetV3.propertyMapping,
          resolveApiName,
        ),
      };
    case "streamV2":
      return {
        type: "stream",
        streamRid: `ri.stream.${def.streamV2.streamLocator}`,
        propertyMapping: convertColumnMapping(
          def.streamV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "streamV3":
      return {
        type: "stream",
        streamRid: `ri.stream.${def.streamV3.streamLocator}`,
        propertyMapping: convertPropertyMapping(
          def.streamV3.propertyMapping,
          resolveApiName,
        ),
      };
    case "restrictedViewV2":
      return {
        type: "restrictedView",
        restrictedViewRid:
          `ri.restrictedView.${def.restrictedViewV2.restrictedViewRid}`,
        propertyMapping: convertPropertyMapping(
          def.restrictedViewV2.propertyMapping,
          resolveApiName,
        ),
      };
    case "direct":
      return {
        type: "direct",
        directSourceRid: `ri.directSource.${def.direct.directSourceRid}`,
        propertyMapping: convertPropertyMapping(
          def.direct.propertyMapping,
          resolveApiName,
        ),
      };
    case "restrictedStream":
      return unsupportedDatasource(
        def.type,
        resolveApiNames(
          Object.keys(def.restrictedStream.propertyMapping),
          resolveApiName,
        ),
      );
    case "timeSeries":
      return {
        type: "timeSeries",
        timeSeriesSyncRid:
          `ri.timeSeriesSync.${def.timeSeries.timeSeriesSyncRid}`,
        properties: resolveApiNames(def.timeSeries.properties, resolveApiName),
      };
    case "mediaSetView":
      return {
        type: "mediaSetView",
        mediaSetViewRid:
          `ri.mediaSetView.${def.mediaSetView.mediaSetViewLocator}`,
        properties: resolveApiNames(
          def.mediaSetView.properties,
          resolveApiName,
        ),
      };
    case "geotimeSeries":
      return {
        type: "geotimeSeries",
        geotimeSeriesIntegrationRid:
          `ri.geotimeSeriesIntegration.${def.geotimeSeries.geotimeSeriesIntegrationRid}`,
        properties: resolveApiNames(
          def.geotimeSeries.properties,
          resolveApiName,
        ),
      };
    case "derived":
      return unsupportedDatasource(
        DERIVED_PROPERTIES_UNSUPPORTED_TYPE,
        derivedPropertyNames(def.derived.definition, resolveApiName),
      );
    default: {
      // Degrade rather than fail generation. The `never` guard makes a future
      // variant a compile error here.
      consola.warn(
        `Unknown IR datasource variant "${sourceType}"; `
          + `degrading to unsupported.`,
      );
      return unsupportedDatasource(sourceType, []);
    }
  }
}

/**
 * The property names a derived datasource backs. `linkedProperties` and
 * `aggregatedProperties` key them off `propertyTypeMapping`; `deleted` lists
 * them directly.
 */
function derivedPropertyNames(
  definition:
    | DerivedPropertiesDefinition
    | OntologyIrDerivedPropertiesDefinition,
  resolveApiName: ResolvePropertyApiName,
): ApiName[] {
  const sourceType: string = definition.type;
  switch (definition.type) {
    case "linkedProperties":
      return resolveApiNames(
        Object.keys(definition.linkedProperties.propertyTypeMapping),
        resolveApiName,
      );
    case "aggregatedProperties":
      return resolveApiNames(
        Object.keys(definition.aggregatedProperties.propertyTypeMapping),
        resolveApiName,
      );
    case "deleted":
      return resolveApiNames(definition.deleted.propertyTypes, resolveApiName);
    default: {
      // The `never` guard makes a future variant a compile error here.
      const _: never = definition;
      consola.warn(
        `Unknown derived properties definition variant "${sourceType}"; `
          + `omitting its backed property names.`,
      );
      return [];
    }
  }
}

/** Resolves each property reference to an api name, dropping the unresolved. */
function resolveApiNames(
  keys: readonly string[],
  resolveApiName: ResolvePropertyApiName,
): ApiName[] {
  const result: ApiName[] = [];
  for (const key of keys) {
    const apiName = resolveApiName(key);
    if (apiName != null) {
      result.push(apiName);
    }
  }
  return result;
}

/**
 * The `unsupported` wire datasource for a variant with no public counterpart,
 * preserving the api names of the properties it backs.
 */
function unsupportedDatasource(
  unsupportedType: string,
  properties: ApiName[],
): Ontologies.ObjectTypeDatasourceDefinition {
  return {
    type: "unsupported",
    unsupportedType,
    properties,
  };
}
