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

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import type { FeatureCollection } from "geojson";
import React, { StrictMode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BaseObjectMap } from "../BaseObjectMap.js";
import type { MapFeature } from "../BaseObjectMapApi.js";

interface MapHarness {
  options: { container: HTMLElement; style: unknown };
  listeners: Map<string, Set<(event?: unknown) => void>>;
  sources: Map<string, { setData: ReturnType<typeof vi.fn> }>;
  layers: Set<string>;
  canvas: HTMLCanvasElement;
  styleLoaded: boolean;
  on: (name: string, callback: (event?: unknown) => void) => void;
  off: (name: string, callback: (event?: unknown) => void) => void;
  getCanvas: () => HTMLCanvasElement;
  isStyleLoaded: () => boolean;
  getSource: (id: string) => { setData: ReturnType<typeof vi.fn> } | undefined;
  addSource: (id: string) => void;
  getLayer: (id: string) => { id: string } | undefined;
  addLayer: (layer: { id: string }) => void;
  setPaintProperty: ReturnType<typeof vi.fn>;
  zoomIn: ReturnType<typeof vi.fn>;
  zoomOut: ReturnType<typeof vi.fn>;
  getCenter: () => { lng: number; lat: number };
  getZoom: () => number;
  queryRenderedFeatures: ReturnType<typeof vi.fn>;
  fitBounds: ReturnType<typeof vi.fn>;
  remove: ReturnType<typeof vi.fn>;
  resize: ReturnType<typeof vi.fn>;
  setStyle: ReturnType<typeof vi.fn>;
}

const renderer = vi.hoisted(() => ({ maps: [] as MapHarness[] }));

// The renderer boundary is mocked; geometry conversion, selection, and React
// lifecycle are real. Browser stories exercise the actual WebGL renderer.
vi.mock("maplibre-gl", () => ({
  default: {
    Map: vi.fn(function createMap(options: MapHarness["options"]) {
      const listeners: MapHarness["listeners"] = new Map();
      const sources: MapHarness["sources"] = new Map();
      const layers = new Set<string>();
      const canvas = document.createElement("canvas");
      options.container.append(canvas);
      const map: MapHarness = {
        options,
        listeners,
        sources,
        layers,
        canvas,
        styleLoaded: false,
        on: (event: string, callback: (event?: unknown) => void) => {
          if (!listeners.has(event)) listeners.set(event, new Set());
          listeners.get(event)?.add(callback);
        },
        off: (event: string, callback: (event?: unknown) => void) => {
          listeners.get(event)?.delete(callback);
        },
        getCanvas: () => canvas,
        isStyleLoaded: () => map.styleLoaded,
        getSource: (id: string) => sources.get(id),
        addSource: (id: string) => {
          sources.set(id, { setData: vi.fn() });
        },
        getLayer: (id: string) => (layers.has(id) ? { id } : undefined),
        addLayer: ({ id }: { id: string }) => {
          layers.add(id);
        },
        setPaintProperty: vi.fn(),
        queryRenderedFeatures: vi.fn(() => []),
        fitBounds: vi.fn(),
        zoomIn: vi.fn(),
        zoomOut: vi.fn(),
        getCenter: () => ({ lng: 10, lat: 20 }),
        getZoom: () => 3,
        remove: vi.fn(() => canvas.remove()),
        resize: vi.fn(),
        setStyle: vi.fn(() => {
          map.styleLoaded = false;
          sources.clear();
          layers.clear();
        }),
      };
      renderer.maps.push(map);
      return map;
    }),
  },
}));

const FEATURES: readonly MapFeature[] = [
  {
    id: "a",
    label: "London",
    geometry: { type: "Point", coordinates: [-0.1, 51.5] },
  },
  {
    id: "b",
    label: "Paris",
    geometry: { type: "Point", coordinates: [2.3, 48.8] },
  },
];

function emit(map: MapHarness, name: string, event?: unknown): void {
  act(() => {
    map.listeners.get(name)?.forEach((callback) => callback(event));
  });
}

function load(map: MapHarness): void {
  map.styleLoaded = true;
  emit(map, "style.load");
  emit(map, "load");
}

function renderedData(map: MapHarness): FeatureCollection {
  const source = [...map.sources.values()][0];
  return source.setData.mock.lastCall?.[0] as FeatureCollection;
}

describe("BaseObjectMap", () => {
  beforeEach(() => {
    renderer.maps.length = 0;
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("keeps the renderer mounted while loading, errors, and new data change", () => {
    const onLoadMore = vi.fn();
    const onRetry = vi.fn();
    const { rerender } = render(<BaseObjectMap features={FEATURES} />);
    const map = renderer.maps[0];
    load(map);
    expect(renderedData(map).features).toHaveLength(2);
    expect(map.fitBounds).toHaveBeenCalledTimes(1);

    rerender(<BaseObjectMap features={FEATURES} isLoading />);
    expect(screen.getByRole("status").textContent).toContain("Loading objects");
    expect(renderer.maps).toHaveLength(1);
    expect(map.remove).not.toHaveBeenCalled();
    rerender(
      <BaseObjectMap
        features={FEATURES}
        error={new Error("Connection lost")}
        onRetry={onRetry}
      />,
    );
    expect(screen.getByRole("alert").textContent).toContain("Connection lost");
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(onRetry).toHaveBeenCalledOnce();

    rerender(
      <BaseObjectMap
        features={[FEATURES[0]]}
        hasMore
        onLoadMore={onLoadMore}
        omittedObjectCount={2}
      />,
    );
    expect(renderedData(map).features).toHaveLength(1);
    expect(map.fitBounds).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("status").textContent).toContain(
      "2 without valid geometry",
    );
    fireEvent.click(screen.getByRole("button", { name: "Load more" }));
    expect(onLoadMore).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole("button", { name: "Fit objects" }));
    expect(map.fitBounds).toHaveBeenCalledTimes(2);
  });

  it("supports uncontrolled map selection and modifier clicks", () => {
    const changed = vi.fn();
    render(<BaseObjectMap features={FEATURES} onSelectionChanged={changed} />);
    const map = renderer.maps[0];
    load(map);
    map.queryRenderedFeatures.mockReturnValue([
      { properties: { objectId: "a" } },
    ]);
    emit(map, "click", {
      point: { x: 1, y: 2 },
      originalEvent: { ctrlKey: false, metaKey: false },
    });
    expect(changed).toHaveBeenLastCalledWith(["a"]);
    expect(renderedData(map).features[0].properties?.selected).toBe(true);
    map.queryRenderedFeatures.mockReturnValue([
      { properties: { objectId: "b" } },
    ]);
    emit(map, "click", {
      point: { x: 1, y: 2 },
      originalEvent: { ctrlKey: true, metaKey: false },
    });
    expect(changed).toHaveBeenLastCalledWith(["a", "b"]);
    map.queryRenderedFeatures.mockReturnValue([]);
    emit(map, "click", {
      point: { x: 1, y: 2 },
      originalEvent: { ctrlKey: false, metaKey: false },
    });
    expect(changed).toHaveBeenLastCalledWith([]);
  });

  it("accepts updates and interaction while source workers are still loading", () => {
    const changed = vi.fn();
    const { rerender } = render(
      <BaseObjectMap features={FEATURES} onSelectionChanged={changed} />,
    );
    const map = renderer.maps[0];
    load(map);
    // MapLibre reports false from isStyleLoaded while processing source data,
    // even though the style and our overlay layers are already installed.
    map.styleLoaded = false;
    rerender(
      <BaseObjectMap features={[FEATURES[1]]} onSelectionChanged={changed} />,
    );
    expect(
      renderedData(map).features.map((feature) => feature.properties?.objectId),
    ).toEqual(["b"]);
    map.queryRenderedFeatures.mockReturnValue([
      { properties: { objectId: "b" } },
    ]);
    emit(map, "click", {
      point: { x: 1, y: 2 },
      originalEvent: { ctrlKey: false, metaKey: false },
    });
    expect(changed).toHaveBeenLastCalledWith(["b"]);
    expect(renderedData(map).features[0].properties?.selected).toBe(true);
  });

  it("leaves controlled selection unchanged until the caller updates props", () => {
    const first = vi.fn();
    const latest = vi.fn();
    const { rerender } = render(
      <BaseObjectMap
        features={FEATURES}
        selectedIds={["a"]}
        onSelectionChanged={first}
      />,
    );
    const map = renderer.maps[0];
    load(map);
    rerender(
      <BaseObjectMap
        features={FEATURES}
        selectedIds={["a"]}
        onSelectionChanged={latest}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Object list" }));
    fireEvent.click(screen.getByRole("checkbox", { name: "Paris" }));
    expect(latest).toHaveBeenLastCalledWith(["a", "b"]);
    expect(first).not.toHaveBeenCalled();
    expect(renderedData(map).features[1].properties?.selected).toBe(false);
    rerender(
      <BaseObjectMap
        features={FEATURES}
        selectedIds={["b"]}
        onSelectionChanged={latest}
      />,
    );
    expect(renderedData(map).features[1].properties?.selected).toBe(true);
  });

  it("restores overlays and current selection when the basemap changes", () => {
    const { rerender } = render(
      <BaseObjectMap features={FEATURES} selectedIds={["a"]} />,
    );
    const map = renderer.maps[0];
    load(map);
    rerender(
      <BaseObjectMap
        features={FEATURES}
        selectedIds={["b"]}
        mapStyle="https://example.com/style.json"
      />,
    );
    expect(map.setStyle).toHaveBeenCalledExactlyOnceWith(
      "https://example.com/style.json",
      { diff: false },
    );
    // Data and selection can change while the new style is still loading.
    rerender(
      <BaseObjectMap
        features={[FEATURES[1]]}
        selectedIds={["b"]}
        mapStyle="https://example.com/style.json"
      />,
    );
    expect(map.sources.size).toBe(0);
    load(map);
    expect(map.layers.size).toBe(3);
    expect(renderedData(map).features).toHaveLength(1);
    expect(renderedData(map).features[0].properties).toMatchObject({
      objectId: "b",
      selected: true,
    });
    expect(renderer.maps).toHaveLength(1);
  });

  it("cleans up each renderer and listener when React replays effects", () => {
    const { unmount } = render(
      <StrictMode>
        <BaseObjectMap features={FEATURES} />
      </StrictMode>,
    );
    expect(renderer.maps).toHaveLength(2);
    expect(renderer.maps[0].remove).toHaveBeenCalledOnce();
    load(renderer.maps[1]);
    unmount();
    for (const map of renderer.maps) {
      expect(map.remove).toHaveBeenCalledOnce();
      for (const callbacks of map.listeners.values())
        expect(callbacks.size).toBe(0);
    }
  });
});
