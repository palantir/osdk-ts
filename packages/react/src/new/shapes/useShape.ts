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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import type {
  LinkLoadConfig,
  LinkStatus,
  NullabilityViolation,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/unstable";

/**
 * Result type for loading a single object with a shape.
 */
export interface UseShapeResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  data: ShapeInstance<S> | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  droppedDueToNullability: boolean;
  nullabilityViolations: readonly NullabilityViolation[];
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => void;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}

/**
 * Options for list mode.
 */
export interface UseShapeListOptions<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  where?: WhereClause<ShapeBaseType<S>>;
  pageSize?: number;
  orderBy?: { [K in PropertyKeys<ShapeBaseType<S>>]?: "asc" | "desc" };
  autoFetchMore?: boolean | number;
  dedupeIntervalMs?: number;
  streamUpdates?: boolean;
  enabled?: boolean;
  links?: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkLoadConfig }>;
}

/**
 * Per-item link status for list results.
 */
export type PerItemLinkStatus<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = Map<
  string | number,
  Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>
>;

/**
 * Result type for loading a list of objects with a shape.
 */
export interface UseShapeListResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  data: ShapeInstance<S>[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<void>) | undefined;
  droppedCount: number;
  nullabilityViolations: readonly NullabilityViolation[];
  itemLinkStatus: PerItemLinkStatus<S>;
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (
    primaryKey: string | number,
    linkName: keyof ShapeDerivedLinks<S>,
  ) => void;
  retry: (
    primaryKey?: string | number,
    linkName?: keyof ShapeDerivedLinks<S>,
  ) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}
