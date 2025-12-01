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

import type { ValueTypeReference } from "@osdk/client.unstable";
import type {
  DatasourceLocator,
  FilesDatasourceLocator,
  GeotimeSeriesIntegrationRid,
  GroupId,
  InputShape,
  InputShapeMetadata,
  LinkTypeRid,
  ObjectTypeRid,
  OutputShape,
  PropertyTypeRid,
  ResolvedDatasourceColumnShape,
  SharedPropertyTypeRid,
  TimeSeriesSyncRid,
} from "@osdk/client.unstable/api";

// Given a unique key generates a rid deterministically (from a lock file eventually)
export type ReadableId = string & { __brand: "ReadableId" };

/**
 * Placeholder interface for OntologyRidGenerator
 * This should be filled in with actual implementation
 */
export interface OntologyRidGenerator {
  getPropertyTypeRids(): BiMap<PropertyTypeRid, ReadableId>;
  getSharedPropertyTypeRids(): BiMap<SharedPropertyTypeRid, ReadableId>;
  getDatasourceLocators(): BiMap<DatasourceLocator, ReadableId>;
  getFilesDatasourceLocators(): BiMap<FilesDatasourceLocator, ReadableId>;
  getGeotimeSeriesIntegrationRids(): BiMap<
    GeotimeSeriesIntegrationRid,
    ReadableId
  >;
  getTimeSeriesSyncs(): BiMap<TimeSeriesSyncRid, ReadableId>;
  getColumnShapes(): BiMap<ResolvedDatasourceColumnShape, ReadableId>;
  getObjectTypeRids(): BiMap<ObjectTypeRid, ReadableId>;
  getLinkTypeRids(): BiMap<LinkTypeRid, ReadableId>;
  getGroupIds(): BiMap<GroupId, ReadableId>;
  valueTypeMappingForReference(valueTypeReference: ValueTypeReference): {
    input: ReadableId;
    output: ReadableId;
  };

  generateRid(key: string): string;
}

/**
 * Simple BiMap interface (placeholder)
 */
export interface BiMap<K, V> {
  get(key: K): V | undefined;
  asMap(): Map<K, V>;
  inverse(): BiMap<V, K>;
  entries(): IterableIterator<[K, V]>;
}

/**
 * BlockShapes container for input and output shapes
 */
export interface BlockShapes {
  inputShapes: Map<ReadableId, InputShape>;
  outputShapes: Map<ReadableId, OutputShape>;
  inputShapeMetadata: Map<ReadableId, InputShapeMetadata>;
}

/**
 * Helper to convert readable ID to block shape ID
 */
function toBlockShapeId(readableId: string, randomnessKey?: string): string {
  // Placeholder implementation - should match Java's ReadableId.toBlockShapeId logic
  return randomnessKey ? `${readableId}-${randomnessKey}` : readableId;
}

export class BiMapImpl<K, V> implements BiMap<K, V> {
  forward: Map<K, V>;
  backward: Map<V, K>;
  public static create<K, V>(): BiMap<K, V> {
    return new BiMapImpl(new Map<K, V>(), new Map<V, K>());
  }

  private constructor(forward: Map<K, V>, backward: Map<V, K>) {
    this.forward = forward;
    this.backward = backward;
  }
  asMap(): Map<K, V> {
    return this.forward;
  }

  get(key: K): V | undefined {
    return this.forward.get(key);
  }
  inverse(): BiMap<V, K> {
    return new BiMapImpl(this.backward, this.forward);
  }
  entries(): IterableIterator<[K, V]> {
    return this.forward.entries();
  }
}

export class OntologyRidGeneratorImpl implements OntologyRidGenerator {
  constructor() {
  }
  getPropertyTypeRids(): BiMap<PropertyTypeRid, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getSharedPropertyTypeRids(): BiMap<SharedPropertyTypeRid, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getDatasourceLocators(): BiMap<DatasourceLocator, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getFilesDatasourceLocators(): BiMap<FilesDatasourceLocator, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getGeotimeSeriesIntegrationRids(): BiMap<
    GeotimeSeriesIntegrationRid,
    ReadableId
  > {
    throw new Error("Method not implemented.");
  }
  getTimeSeriesSyncs(): BiMap<TimeSeriesSyncRid, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getColumnShapes(): BiMap<ResolvedDatasourceColumnShape, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getObjectTypeRids(): BiMap<ObjectTypeRid, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getLinkTypeRids(): BiMap<LinkTypeRid, ReadableId> {
    throw new Error("Method not implemented.");
  }
  getGroupIds(): BiMap<GroupId, ReadableId> {
    throw new Error("Method not implemented.");
  }
  valueTypeMappingForReference(valueTypeReference: ValueTypeReference): {
    input: ReadableId;
    output: ReadableId;
  } {
    throw new Error("Method not implemented.");
  }
  generateRid(key: string): string {
    return key;
  }
}
