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

// cspell:ignore moveend
import type {
  GeoJSONSource,
  Map as MapLibreMap,
  MapMouseEvent,
  StyleSpecification,
} from "maplibre-gl";
import maplibregl from "maplibre-gl";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { RefObject } from "react";

import type { BaseObjectMapProps, MapFeature } from "../BaseObjectMapApi.js";
import {
  getMapBounds,
  toMapFeatureCollection,
  toggleMapSelection,
} from "../utils/mapGeometry.js";

const EMPTY_IDS: readonly string[] = [];
const SOURCE_ID = "osdk-object-map";
const FILL_ID = `${SOURCE_ID}-fill`;
const LINE_ID = `${SOURCE_ID}-line`;
const POINT_ID = `${SOURCE_ID}-point`;
const LAYER_IDS = [POINT_ID, LINE_ID, FILL_ID];
const BLANK_STYLE: StyleSpecification = { version: 8, sources: {}, layers: [] };

type Options = Pick<
  BaseObjectMapProps,
  | "features"
  | "mapStyle"
  | "defaultViewport"
  | "selectedIds"
  | "defaultSelectedIds"
  | "onSelectionChanged"
  | "onViewportChanged"
  | "ariaLabel"
>;

interface UseBaseObjectMapResult {
  containerRef: RefObject<HTMLDivElement>;
  selection: readonly string[];
  selectFeature: (id: string, additive?: boolean) => void;
  clearSelection: () => void;
  zoomToFit: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  isReady: boolean;
  renderError: Error | undefined;
  hoveredFeature: MapFeature | undefined;
  isListOpen: boolean;
  toggleList: () => void;
}

function readTheme(container: HTMLElement) {
  const styles = getComputedStyle(container);
  const number = (name: string): number =>
    Number.parseFloat(styles.getPropertyValue(name)) || 0;
  const color = (name: string): string =>
    styles.getPropertyValue(name).trim() || styles.color;
  return {
    color: color("--osdk-map-feature-color"),
    selectedColor: color("--osdk-map-selected-color"),
    outlineColor: color("--osdk-map-outline-color"),
    pointRadius: number("--osdk-map-point-radius"),
    selectedPointRadius: number("--osdk-map-selected-point-radius"),
    lineWidth: number("--osdk-map-line-width"),
    selectedLineWidth: number("--osdk-map-selected-line-width"),
    pointStrokeWidth: number("--osdk-map-point-stroke-width"),
    fillOpacity: number("--osdk-map-fill-opacity"),
    fitPadding: number("--osdk-map-fit-padding"),
  };
}

function updatePaint(map: MapLibreMap, container: HTMLElement): void {
  const theme = readTheme(container);
  const color = ["case", ["get", "selected"], theme.selectedColor, theme.color];
  map.setPaintProperty(FILL_ID, "fill-color", color);
  map.setPaintProperty(FILL_ID, "fill-opacity", theme.fillOpacity);
  map.setPaintProperty(LINE_ID, "line-color", color);
  map.setPaintProperty(LINE_ID, "line-width", [
    "case",
    ["get", "selected"],
    theme.selectedLineWidth,
    theme.lineWidth,
  ]);
  map.setPaintProperty(POINT_ID, "circle-color", color);
  map.setPaintProperty(POINT_ID, "circle-radius", [
    "case",
    ["get", "selected"],
    theme.selectedPointRadius,
    theme.pointRadius,
  ]);
  map.setPaintProperty(POINT_ID, "circle-stroke-color", theme.outlineColor);
  map.setPaintProperty(POINT_ID, "circle-stroke-width", theme.pointStrokeWidth);
}

function fitFeatures(
  map: MapLibreMap,
  container: HTMLElement,
  features: readonly MapFeature[],
): void {
  const bounds = getMapBounds(features);
  if (bounds != null) {
    map.fitBounds(bounds, {
      padding: readTheme(container).fitPadding,
      maxZoom: 14,
      duration: 0,
    });
  }
}

/** Owns interaction state and the renderer lifecycle independently of the component markup. */
export function useBaseObjectMap(options: Options): UseBaseObjectMapResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap>();
  const styleReadyRef = useRef(false);
  const synchronizeRef = useRef<() => void>();
  const [internalSelection, setInternalSelection] = useState(
    options.defaultSelectedIds ?? EMPTY_IDS,
  );
  const [renderError, setRenderError] = useState<Error>();
  const [isReady, setIsReady] = useState(false);
  const [hoveredId, setHoveredId] = useState<string>();
  const [isListOpen, setIsListOpen] = useState(false);
  const selection = options.selectedIds ?? internalSelection;
  const data = useMemo(
    () => toMapFeatureCollection(options.features, selection),
    [options.features, selection],
  );
  const latest = useRef({ options, selection, data });
  useLayoutEffect(() => {
    latest.current = { options, selection, data };
  });
  const initial = useRef(options);
  const previousStyle = useRef(options.mapStyle);

  const changeSelection = useCallback((ids: readonly string[]) => {
    if (latest.current.options.selectedIds === undefined)
      setInternalSelection(ids);
    latest.current.options.onSelectionChanged?.(ids);
  }, []);

  const selectFeature = useCallback(
    (id: string, additive = false) => {
      changeSelection(
        toggleMapSelection(latest.current.selection, id, additive),
      );
    },
    [changeSelection],
  );

  const clearSelection = useCallback(
    () => changeSelection(EMPTY_IDS),
    [changeSelection],
  );
  const toggleList = useCallback(() => setIsListOpen((open) => !open), []);

  const zoomToFit = useCallback(() => {
    if (mapRef.current != null && containerRef.current != null) {
      fitFeatures(
        mapRef.current,
        containerRef.current,
        latest.current.options.features,
      );
    }
  }, []);
  const zoomIn = useCallback(() => {
    mapRef.current?.zoomIn({ duration: 0 });
  }, []);
  const zoomOut = useCallback(() => {
    mapRef.current?.zoomOut({ duration: 0 });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;
    let map: MapLibreMap;
    try {
      const camera = initial.current.defaultViewport;
      map = new maplibregl.Map({
        container,
        style: initial.current.mapStyle ?? BLANK_STYLE,
        center: camera == null ? [0, 20] : [camera.longitude, camera.latitude],
        zoom: camera?.zoom ?? 1,
        attributionControl: { compact: true },
      });
    } catch (error) {
      // oxlint-disable-next-line react/set-state-in-effect -- Surface synchronous WebGL initialization failures from the external renderer.
      setRenderError(error instanceof Error ? error : new Error(String(error)));
      return;
    }
    mapRef.current = map;
    // oxlint-disable-next-line react/set-state-in-effect -- A recreated external renderer is not ready until its style loads.
    setIsReady(false);
    let needsInitialFit = initial.current.defaultViewport == null;
    const canvas = map.getCanvas();
    canvas.setAttribute(
      "aria-label",
      initial.current.ariaLabel ?? "Object map",
    );

    const synchronize = (): void => {
      // isStyleLoaded() also becomes false while source workers process setData.
      // A ready style still accepts newer data during that work; waiting for
      // another style.load would lose selection or filter updates indefinitely.
      if (!styleReadyRef.current) return;
      if (map.getSource(SOURCE_ID) == null) {
        map.addSource(SOURCE_ID, {
          type: "geojson",
          data: latest.current.data,
        });
      }
      if (map.getLayer(FILL_ID) == null) {
        map.addLayer({
          id: FILL_ID,
          type: "fill",
          source: SOURCE_ID,
          filter: ["==", ["geometry-type"], "Polygon"],
        });
      }
      if (map.getLayer(LINE_ID) == null) {
        map.addLayer({
          id: LINE_ID,
          type: "line",
          source: SOURCE_ID,
          filter: ["!=", ["geometry-type"], "Point"],
        });
      }
      if (map.getLayer(POINT_ID) == null) {
        map.addLayer({
          id: POINT_ID,
          type: "circle",
          source: SOURCE_ID,
          filter: ["==", ["geometry-type"], "Point"],
        });
      }
      (map.getSource(SOURCE_ID) as GeoJSONSource).setData(latest.current.data);
      updatePaint(map, container);
      if (needsInitialFit && latest.current.data.features.length > 0) {
        needsInitialFit = false;
        fitFeatures(map, container, latest.current.options.features);
      }
      setIsReady(true);
    };
    const handleStyleLoad = (): void => {
      styleReadyRef.current = true;
      setRenderError(undefined);
      synchronize();
    };
    const featureAt = (event: MapMouseEvent): string | undefined => {
      const layers = LAYER_IDS.filter((id) => map.getLayer(id) != null);
      if (layers.length === 0) return;
      const id: unknown = map.queryRenderedFeatures(event.point, { layers })[0]
        ?.properties?.objectId;
      // A worker can briefly render the previous source data after filtering.
      return typeof id === "string" &&
        latest.current.options.features.some((feature) => feature.id === id)
        ? id
        : undefined;
    };
    const handleClick = (event: MapMouseEvent): void => {
      const id = featureAt(event);
      if (id == null) {
        if (!event.originalEvent.ctrlKey && !event.originalEvent.metaKey)
          clearSelection();
      } else {
        selectFeature(
          id,
          event.originalEvent.ctrlKey || event.originalEvent.metaKey,
        );
      }
    };
    const handleMove = (event: MapMouseEvent): void => {
      const id = featureAt(event);
      setHoveredId(id);
      canvas.style.cursor = id == null ? "" : "pointer";
    };
    const handleLeave = (): void => {
      setHoveredId(undefined);
      canvas.style.cursor = "";
    };
    const handleViewport = (): void => {
      const center = map.getCenter();
      latest.current.options.onViewportChanged?.({
        longitude: center.lng,
        latitude: center.lat,
        zoom: map.getZoom(),
      });
    };
    const handleError = (event: { error: Error }): void => {
      setRenderError(event.error);
    };
    map.on("load", synchronize);
    map.on("style.load", handleStyleLoad);
    map.on("click", handleClick);
    map.on("mousemove", handleMove);
    map.on("mouseout", handleLeave);
    map.on("moveend", handleViewport);
    map.on("error", handleError);
    synchronizeRef.current = synchronize;
    const resize = new ResizeObserver(() => map.resize());
    resize.observe(container);
    const theme = new MutationObserver(() => {
      if (styleReadyRef.current && map.getLayer(POINT_ID) != null)
        updatePaint(map, container);
    });
    let ancestor: HTMLElement | null = container;
    while (ancestor != null) {
      theme.observe(ancestor, {
        attributes: true,
        attributeFilter: ["class", "style"],
      });
      ancestor = ancestor.parentElement;
    }
    return () => {
      resize.disconnect();
      theme.disconnect();
      synchronizeRef.current = undefined;
      map.off("load", synchronize);
      map.off("style.load", handleStyleLoad);
      map.off("click", handleClick);
      map.off("mousemove", handleMove);
      map.off("mouseout", handleLeave);
      map.off("moveend", handleViewport);
      map.off("error", handleError);
      map.remove();
      mapRef.current = undefined;
      styleReadyRef.current = false;
    };
  }, [clearSelection, selectFeature]);

  useEffect(() => {
    synchronizeRef.current?.();
  }, [data]);

  useEffect(() => {
    if (previousStyle.current !== options.mapStyle && mapRef.current != null) {
      previousStyle.current = options.mapStyle;
      styleReadyRef.current = false;
      setIsReady(false);
      setHoveredId(undefined);
      // A successful style diff does not emit style.load. Recreate the style so
      // the event reinstalls our source/layers before accepting further updates.
      mapRef.current.setStyle(options.mapStyle ?? BLANK_STYLE, { diff: false });
    }
  }, [options.mapStyle]);

  useEffect(() => {
    mapRef.current
      ?.getCanvas()
      .setAttribute("aria-label", options.ariaLabel ?? "Object map");
  }, [options.ariaLabel]);

  return {
    containerRef,
    selection,
    selectFeature,
    clearSelection,
    zoomToFit,
    zoomIn,
    zoomOut,
    isReady,
    renderError,
    hoveredFeature: options.features.find(
      (feature) => feature.id === hoveredId,
    ),
    isListOpen,
    toggleList,
  };
}
