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

// cspell:words basemap fontstack hillshade

import type {
  LayerSpecification,
  SourceSpecification,
  SpriteSpecification,
} from "@maplibre/maplibre-gl-style-spec";

/**
 * A renderable MapLibre style for a map tile layer.
 *
 * This is the renderable subset of a MapLibre style version 8 document: the
 * tile sources, the layers that draw them, and the sprite and glyph resources
 * those layers reference. Field names and semantics are MapLibre's own, so the
 * value needs no translation before it is rendered:
 *
 * ```ts
 * map.setStyle({ ...style });
 * ```
 *
 * Map-level settings such as `center`, `zoom`, `bearing`, `pitch`,
 * `projection`, and `terrain` are deliberately absent — those belong to the
 * widget rather than to any one tile layer — so a style can also be added to a
 * map that already has layers of its own:
 *
 * ```ts
 * for (const [id, source] of Object.entries(style.sources)) {
 *   map.addSource(id, source);
 * }
 * // Layers are bottom-to-top. Pass a `beforeId` to sit beneath the widget's
 * // own layers, which is usually what a basemap wants.
 * for (const layer of style.layers) {
 *   map.addLayer(layer, beforeId);
 * }
 * ```
 *
 * `sprite` and `glyphs` apply to a whole map rather than to one source, so
 * adding two styles that declare different values for them cannot fully
 * succeed: `map.setGlyphs` holds a single URL, and `map.setSprite` replaces
 * every sprite rather than merging. When composing several styles, use
 * `map.addSprite(id, url)` with a distinct id per style, and expect the glyph
 * URL of the last style applied to win.
 */
export interface MapTileLayerStyle {
  /** MapLibre style specification version. */
  version: 8;

  /**
   * Sources, keyed by the id that layers reference in their `source`. Usually
   * `raster` or `vector` tiles, but any MapLibre source type is permitted so
   * that, for example, a basemap can bundle overlays as inline `geojson`.
   *
   * Zoom bounds, tile size, attribution, and coverage `bounds` are declared per
   * source, as in MapLibre and TileJSON. A `raster-dem` source is drawn through
   * a `hillshade` layer; it cannot drive 3D terrain, because that is configured
   * by the map-level `terrain` setting this type deliberately omits.
   */
  sources: Record<string, SourceSpecification>;

  /**
   * Layers in drawing order, from bottom to top. Each layer's `source` names a
   * key of {@link MapTileLayerStyle.sources}, and layer ids are unique within
   * the style.
   */
  layers: LayerSpecification[];

  /**
   * Sprite resources for the icons and patterns referenced by `layers`: either
   * a single base URL without a file extension, or MapLibre's id/url pairs.
   * Applies to the whole style rather than to one source.
   */
  sprite?: SpriteSpecification;

  /**
   * Glyph URL template containing `{fontstack}` and `{range}`, for the text
   * labels referenced by `layers`. Applies to the whole style rather than to
   * one source.
   */
  glyphs?: string;
}
