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

import type { Geometry } from "geojson";
import type { StyleSpecification } from "maplibre-gl";

/** A map of already loaded features, independent of an ontology client. */
export interface BaseObjectMapProps {
  /** Features to display. Each feature must have a unique ID. */
  features: readonly MapFeature[];
  /** Accessible name of the map. @default "Object map" */
  ariaLabel?: string;
  /** Map style or style URL. No external tile requests are made by default. @default a blank basemap */
  mapStyle?: string | StyleSpecification;
  /** Uncontrolled initial camera. @default center [0, 20], zoom 1 */
  defaultViewport?: MapViewport;
  /** Controlled selection. Omit to let the map own selection. @default undefined */
  selectedIds?: readonly string[];
  /** Uncontrolled initial selection. @default [] */
  defaultSelectedIds?: readonly string[];
  /** Observes selection in either mode. Ctrl/Cmd-click toggles individual features. @default undefined */
  onSelectionChanged?: (ids: readonly string[]) => void;
  /** Observes camera changes after map navigation. @default undefined */
  onViewportChanged?: (viewport: MapViewport) => void;
  /** Show a loading indicator while retaining visible features. @default false */
  isLoading?: boolean;
  /** A loading error to display alongside existing features. @default undefined */
  error?: Error;
  /** Retry a failed data request. @default undefined */
  onRetry?: () => void;
  /** Whether more objects can be requested. The map shows only loaded features. @default false */
  hasMore?: boolean;
  /** Requests the next page of objects. @default undefined */
  onLoadMore?: () => void;
  /** Number of loaded objects without valid geometry. @default 0 */
  omittedObjectCount?: number;
  /** Additional root class. The parent must provide a height. @default undefined */
  className?: string;
}

/** A single selectable object. Coordinates use GeoJSON longitude, latitude order. */
export interface MapFeature {
  id: string;
  label: string;
  geometry: Geometry;
}

/** Camera position in longitude, latitude order. */
export interface MapViewport {
  longitude: number;
  latitude: number;
  zoom: number;
}
