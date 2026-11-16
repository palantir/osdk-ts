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

import classNames from "classnames";

import "maplibre-gl/dist/maplibre-gl.css";
import React, { useId } from "react";

import { ActionButton } from "../base-components/action-button/ActionButton.js";
import type { BaseObjectMapProps } from "./BaseObjectMapApi.js";
import { MapFeatureList } from "./components/MapFeatureList.js";
import { useBaseObjectMap } from "./hooks/useBaseObjectMap.js";

import styles from "./ObjectMap.module.css";

/** Displays loaded features and exposes map selection to the surrounding application. */
export function BaseObjectMap({
  features,
  ariaLabel = "Object map",
  mapStyle,
  defaultViewport,
  selectedIds,
  defaultSelectedIds,
  onSelectionChanged,
  onViewportChanged,
  isLoading = false,
  error,
  onRetry,
  hasMore = false,
  onLoadMore,
  omittedObjectCount = 0,
  className,
}: BaseObjectMapProps): React.ReactElement {
  const {
    containerRef,
    selection,
    selectFeature,
    clearSelection,
    zoomToFit,
    zoomIn,
    zoomOut,
    isReady,
    renderError,
    hoveredFeature,
    isListOpen,
    toggleList,
  } = useBaseObjectMap({
    features,
    ariaLabel,
    mapStyle,
    defaultViewport,
    selectedIds,
    defaultSelectedIds,
    onSelectionChanged,
    onViewportChanged,
  });
  const listId = useId();

  return (
    <section
      className={classNames(styles.root, className)}
      aria-label={ariaLabel}
    >
      <div className={styles.toolbar} role="group" aria-label="Map controls">
        <ActionButton
          onClick={zoomToFit}
          disabled={!isReady || features.length === 0}
        >
          Fit objects
        </ActionButton>
        <ActionButton onClick={zoomIn} disabled={!isReady}>
          Zoom in
        </ActionButton>
        <ActionButton onClick={zoomOut} disabled={!isReady}>
          Zoom out
        </ActionButton>
        <ActionButton
          onClick={toggleList}
          aria-expanded={isListOpen}
          aria-controls={listId}
        >
          Object list
        </ActionButton>
        <ActionButton
          onClick={clearSelection}
          disabled={selection.length === 0}
        >
          Clear selection
        </ActionButton>
      </div>
      <div className={styles.mapArea}>
        <div className={styles.canvas}>
          <div ref={containerRef} className={styles.renderer} />
        </div>
        {hoveredFeature != null && (
          <div className={styles.tooltip} role="tooltip">
            {hoveredFeature.label}
          </div>
        )}
        {isListOpen && (
          <MapFeatureList
            id={listId}
            features={features}
            selectedIds={selection}
            onSelect={selectFeature}
          />
        )}
      </div>
      <div className={styles.statusBar}>
        <span role="status" aria-live="polite">
          {features.length} mapped · {selection.length} selected
          {isLoading ? " · Loading objects…" : ""}
          {hasMore ? " · More objects available" : ""}
          {omittedObjectCount > 0
            ? ` · ${omittedObjectCount} without valid geometry`
            : ""}
          {!isLoading && !error && features.length === 0
            ? " · No objects to display"
            : ""}
        </span>
        {hasMore && onLoadMore != null && (
          <ActionButton onClick={onLoadMore} disabled={isLoading}>
            Load more
          </ActionButton>
        )}
      </div>
      {error != null && (
        <div className={styles.error} role="alert">
          <span>Unable to load objects: {error.message}</span>
          {onRetry != null && (
            <ActionButton onClick={onRetry} disabled={isLoading}>
              Retry
            </ActionButton>
          )}
        </div>
      )}
      {renderError != null && (
        <div className={styles.error} role="alert">
          Unable to render map: {renderError.message}
        </div>
      )}
    </section>
  );
}
