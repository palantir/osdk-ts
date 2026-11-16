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

import type {
  ObjectTypeDefinition,
  ObjectSet,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";

import type { BaseObjectMapProps } from "./BaseObjectMapApi.js";

/** Experimental map for a paginated object set with a geopoint or geoshape property. */
export interface ObjectMapProps<Q extends ObjectTypeDefinition> extends Pick<
  BaseObjectMapProps,
  | "ariaLabel"
  | "mapStyle"
  | "defaultViewport"
  | "onViewportChanged"
  | "className"
> {
  /** Object type to display. Interface types are not supported. */
  objectType: Q;
  /** Object set to display instead of all objects of the type. @default undefined */
  objectSet?: ObjectSet<Q>;
  /** Server-side filter, also applied when an object set is supplied. @default undefined */
  filter?: WhereClause<Q>;
  /** Geometry property. Required when the type has multiple geometry properties. @default the sole geopoint or geoshape property */
  geometryProperty?: PropertyKeys<Q>;
  /** Number of objects requested per page. A Load more button exposes additional pages. @default 100 */
  pageSize?: number;
  /** Controlled selection by primary key. Omit to let the map own selection. @default undefined */
  selectedObjectKeys?: readonly PrimaryKeyType<Q>[];
  /** Uncontrolled initial selection by primary key. @default [] */
  defaultSelectedObjectKeys?: readonly PrimaryKeyType<Q>[];
  /** Observes selected loaded objects in either selection mode. @default undefined */
  onSelectionChanged?: (
    objects: readonly Osdk.Instance<Q, "$allBaseProperties">[],
  ) => void;
}

export type {
  BaseObjectMapProps,
  MapFeature,
  MapViewport,
} from "./BaseObjectMapApi.js";
