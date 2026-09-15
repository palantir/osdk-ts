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

export interface MapTileSourceV0 {
  apiVersion: 0;
  attribution?: string;
  bounds?: [west: number, south: number, east: number, north: number];
  minZoom: number;
  maxZoom: number;
  tiling: "WEB_MERCATOR";
  spec: RasterTileSpec;
}

export interface RasterTileSpec {
  format: "raster";
  tileUrl: string;
  tileSize: number;
}

export type MapTileSource = MapTileSourceV0;
