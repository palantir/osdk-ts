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

import type { ObjectTypeDefinition, ObjectSet, Osdk } from "@osdk/api";
import { type Client, getWireObjectSet } from "@osdk/client";
import { useObjectSet, useOsdkClient, useOsdkMetadata } from "@osdk/react";
import * as React from "react";
import { useCallback, useMemo, useState } from "react";

import { BaseObjectMap } from "./BaseObjectMap.js";
import type { MapFeature } from "./BaseObjectMapApi.js";
import type { ObjectMapProps } from "./ObjectMapApi.js";
import {
  objectMapFeatureId,
  objectMapGeometry,
} from "./utils/objectMapGeometry.js";

const EMPTY_KEYS: readonly never[] = [];
const EMPTY_OBJECTS: readonly never[] = [];

interface ObjectMapContentProps<
  Q extends ObjectTypeDefinition,
> extends ObjectMapProps<Q> {
  onMetadataRetry: () => void;
}

export function ObjectMapContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  filter,
  geometryProperty,
  pageSize = 100,
  selectedObjectKeys,
  defaultSelectedObjectKeys = EMPTY_KEYS,
  onSelectionChanged,
  onMetadataRetry,
  ...baseProps
}: ObjectMapContentProps<Q>): React.JSX.Element {
  const client = useOsdkClient();
  const {
    metadata,
    loading: metadataLoading,
    error: metadataError,
  } = useOsdkMetadata(objectType);
  const geometryConfig = useMemo(() => {
    if (metadata == null) return {};
    const properties = Object.entries(metadata.properties)
      .filter(
        ([, property]) =>
          !property.multiplicity &&
          (property.type === "geopoint" || property.type === "geoshape"),
      )
      .map(([name]) => name);
    if (geometryProperty != null) {
      return properties.includes(geometryProperty)
        ? { property: geometryProperty }
        : {
            error: new Error(
              `The geometry property "${geometryProperty}" must be a single geopoint or geoshape.`,
            ),
          };
    }
    if (properties.length === 1) return { property: properties[0] };
    return {
      error: new Error(
        properties.length === 0
          ? "This object type has no single geopoint or geoshape property."
          : "This object type has multiple geometry properties. Set geometryProperty to choose one.",
      ),
    };
  }, [metadata, geometryProperty]);
  const pageSizeError = useMemo(
    () =>
      Number.isInteger(pageSize) && pageSize > 0
        ? undefined
        : new Error("pageSize must be a positive integer."),
    [pageSize],
  );
  const query = useMemo(() => {
    const base: ObjectSet<Q> = objectSet ?? client(objectType);
    return filter == null ? base : base.where(filter);
  }, [client, objectType, objectSet, filter]);
  const queryKey = JSON.stringify(getWireObjectSet(query));
  const enabled = geometryConfig.property != null && pageSizeError == null;
  const result = useObjectSet(query, { enabled, pageSize });
  // useObjectSet retains its previous result while a new query loads. That is
  // useful for refreshes, but showing rows from a different filter is misleading.
  const hasCurrentData =
    enabled &&
    result.objectSet != null &&
    JSON.stringify(getWireObjectSet(result.objectSet)) === queryKey;
  const [previousData, setPreviousData] = useState<{
    client: Client;
    queryKey: string;
    objects: readonly Osdk.Instance<Q, "$allBaseProperties">[];
  }>();
  const currentObjects =
    hasCurrentData && result.error == null ? result.data : undefined;
  if (
    currentObjects != null &&
    (previousData?.client !== client ||
      previousData.queryKey !== queryKey ||
      previousData.objects !== currentObjects)
  ) {
    setPreviousData({ client, queryKey, objects: currentObjects });
  }
  const objects =
    enabled &&
    previousData?.client === client &&
    previousData.queryKey === queryKey
      ? (currentObjects ?? previousData.objects)
      : EMPTY_OBJECTS;
  const { features, objectsById, omittedObjectCount } = useMemo(() => {
    const mappedFeatures: MapFeature[] = [];
    const objectsByFeatureId = new Map<
      string,
      Osdk.Instance<Q, "$allBaseProperties">
    >();
    for (const object of objects) {
      const properties = object as unknown as Record<string, unknown>;
      const geometry = objectMapGeometry(
        properties[geometryConfig.property ?? ""],
      );
      if (geometry == null) continue;
      const id = objectMapFeatureId(object.$primaryKey);
      mappedFeatures.push({
        id,
        label: object.$title ?? String(object.$primaryKey),
        geometry,
      });
      objectsByFeatureId.set(id, object);
    }
    return {
      features: mappedFeatures,
      objectsById: objectsByFeatureId,
      omittedObjectCount: objects.length - mappedFeatures.length,
    };
  }, [objects, geometryConfig.property]);
  const selectedIds = useMemo(
    () => selectedObjectKeys?.map(objectMapFeatureId),
    [selectedObjectKeys],
  );
  const defaultSelectedIds = useMemo(
    () => defaultSelectedObjectKeys.map(objectMapFeatureId),
    [defaultSelectedObjectKeys],
  );
  const handleSelectionChanged = useCallback(
    (ids: readonly string[]) => {
      const selected: Osdk.Instance<Q, "$allBaseProperties">[] = [];
      for (const id of ids) {
        const object = objectsById.get(id);
        if (object != null) selected.push(object);
      }
      onSelectionChanged?.(selected);
    },
    [objectsById, onSelectionChanged],
  );
  const [requestError, setRequestError] = useState<{
    queryKey: string;
    error: Error;
  }>();
  const reportRequestError = useCallback(
    (error: unknown) => {
      setRequestError({
        queryKey,
        error: error instanceof Error ? error : new Error(String(error)),
      });
    },
    [queryKey],
  );
  const { refetch, fetchMore } = result;
  const handleRetry = useCallback(() => {
    setRequestError(undefined);
    void refetch().catch(reportRequestError);
  }, [refetch, reportRequestError]);
  const handleLoadMore = useCallback(() => {
    setRequestError(undefined);
    void fetchMore?.().catch(reportRequestError);
  }, [fetchMore, reportRequestError]);
  const configurationError = geometryConfig.error ?? pageSizeError;
  const error =
    configurationError ??
    (metadataError == null ? undefined : new Error(metadataError)) ??
    (requestError?.queryKey === queryKey ? requestError.error : undefined) ??
    (result.objectSet == null || hasCurrentData ? result.error : undefined);

  return (
    <BaseObjectMap
      {...baseProps}
      features={features}
      selectedIds={selectedIds}
      defaultSelectedIds={defaultSelectedIds}
      onSelectionChanged={handleSelectionChanged}
      omittedObjectCount={omittedObjectCount}
      isLoading={metadataLoading || (enabled && result.isLoading)}
      error={error}
      onRetry={
        configurationError != null
          ? undefined
          : metadataError == null
            ? handleRetry
            : onMetadataRetry
      }
      hasMore={enabled && hasCurrentData && result.hasMore}
      onLoadMore={handleLoadMore}
    />
  );
}
