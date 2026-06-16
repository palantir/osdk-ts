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

import { getFiberFromElement } from "../fiber/FiberAccess.js";
import {
  getComponentName,
  getHookStates,
  getProps,
  getSourceLocation,
} from "../fiber/FiberInspection.js";
import { isUserComponent } from "../fiber/FiberTags.js";
import { findParentComponent } from "../fiber/traverseFiber.js";
import type { Fiber } from "../fiber/types.js";
import type {
  InspectedComponent,
  InspectorController,
  InspectorOptions,
  InspectorState,
} from "./types.js";
import {
  createElementBounds,
  getElementAtPosition,
} from "./utils/elementBounds.js";

const OFFSCREEN_POSITION = -9999;
const DEFAULT_THROTTLE_MS = 32;
const DEFAULT_BOUNDS_REFRESH_INTERVAL_MS = 100;

function createInitialState(): InspectorState {
  return {
    mode: "inactive",
    mouseX: OFFSCREEN_POSITION,
    mouseY: OFFSCREEN_POSITION,
    hoveredElement: null,
    selectedElement: null,
    frozenElement: null,
    inspectedComponent: null,
    selectionBounds: null,
    labelPosition: null,
    labelStatus: "idle",
    viewportVersion: 0,
  };
}

function extractComponentInfo(
  element: Element,
  fiber: Fiber,
): InspectedComponent | null {
  const name = getComponentName(fiber);
  if (!name) {
    return null;
  }

  const sourceLocation = getSourceLocation(fiber);
  const props = getProps(fiber);
  const hookStates = getHookStates(fiber);

  return {
    name,
    fiber: new WeakRef(fiber),
    element: new WeakRef(element),
    sourceLocation,
    props,
    hookCount: hookStates.length,
  };
}

export function createInspectorController(
  options: InspectorOptions = {},
): InspectorController {
  const {
    containerElement = document.body,
    throttleMs = DEFAULT_THROTTLE_MS,
    boundsRefreshIntervalMs = DEFAULT_BOUNDS_REFRESH_INTERVAL_MS,
    eventHandlers = {},
  } = options;

  let state = createInitialState();
  const listeners = new Set<(state: InspectorState) => void>();
  let lastElementDetectionTime = 0;
  let boundsRefreshIntervalId: ReturnType<typeof setInterval> | null = null;
  let abortController: AbortController | null = null;

  function setState(partial: Partial<InspectorState>): void {
    state = { ...state, ...partial };
    listeners.forEach((listener) => listener(state));
  }

  function handleMouseMove(event: MouseEvent): void {
    if (state.mode === "inactive" || state.mode === "frozen") {
      return;
    }

    const { clientX, clientY } = event;
    setState({ mouseX: clientX, mouseY: clientY });

    const now = performance.now();
    if (now - lastElementDetectionTime < throttleMs) {
      return;
    }
    lastElementDetectionTime = now;

    detectElementAtPosition(clientX, clientY);
  }

  function detectElementAtPosition(clientX: number, clientY: number): void {
    const element = getElementAtPosition(
      clientX,
      clientY,
      "[data-osdk-devtools-ignore]",
    );

    if (!element) {
      setState({
        hoveredElement: null,
        inspectedComponent: null,
        selectionBounds: null,
        labelStatus: "idle",
      });
      eventHandlers.onHover?.(null);
      return;
    }

    if (element === state.hoveredElement) {
      return;
    }

    const fiber = getFiberFromElement(element);
    if (!fiber) {
      setState({
        hoveredElement: element,
        inspectedComponent: null,
        selectionBounds: createElementBounds(element),
        labelStatus: "idle",
      });
      eventHandlers.onHover?.(null);
      return;
    }

    const componentFiber = isUserComponent(fiber)
      ? fiber
      : findParentComponent(fiber);
    if (!componentFiber) {
      setState({
        hoveredElement: element,
        inspectedComponent: null,
        selectionBounds: createElementBounds(element),
        labelStatus: "idle",
      });
      eventHandlers.onHover?.(null);
      return;
    }

    const componentInfo = extractComponentInfo(element, componentFiber);
    setState({
      hoveredElement: element,
      inspectedComponent: componentInfo,
      selectionBounds: createElementBounds(element),
      labelStatus: "hover",
    });

    if (componentInfo) {
      eventHandlers.onHover?.(componentInfo);
    }
  }

  function handleClick(event: MouseEvent): void {
    if (state.mode === "inactive") {
      return;
    }

    const target = event.target as Element;

    if (target.closest("[data-osdk-devtools-ignore]")) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    if (state.mode === "frozen") {
      setState({ mode: "hover", frozenElement: null, labelStatus: "hover" });
      return;
    }

    if (state.hoveredElement && state.inspectedComponent) {
      setState({
        mode: "frozen",
        frozenElement: state.hoveredElement,
        selectedElement: state.hoveredElement,
        labelStatus: "selected",
      });
      eventHandlers.onSelect?.(state.inspectedComponent);
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (state.mode === "inactive") {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (state.mode === "frozen") {
        setState({ mode: "hover", frozenElement: null, labelStatus: "hover" });
      } else {
        deactivate();
      }
    }
  }

  function handleScroll(): void {
    if (state.mode === "inactive") {
      return;
    }
    setState({ viewportVersion: state.viewportVersion + 1 });
    recalculateBounds();
  }

  function handleResize(): void {
    if (state.mode === "inactive") {
      return;
    }
    setState({ viewportVersion: state.viewportVersion + 1 });
    recalculateBounds();
  }

  function recalculateBounds(): void {
    const element = state.frozenElement ?? state.hoveredElement;
    if (!element || !document.contains(element)) {
      setState({
        hoveredElement: null,
        frozenElement: null,
        inspectedComponent: null,
        selectionBounds: null,
        labelStatus: "idle",
      });
      return;
    }

    setState({ selectionBounds: createElementBounds(element) });
  }

  function startBoundsRefreshInterval(): void {
    if (boundsRefreshIntervalId) {
      return;
    }
    boundsRefreshIntervalId = setInterval(
      recalculateBounds,
      boundsRefreshIntervalMs,
    );
  }

  function stopBoundsRefreshInterval(): void {
    if (boundsRefreshIntervalId) {
      clearInterval(boundsRefreshIntervalId);
      boundsRefreshIntervalId = null;
    }
  }

  function attachEventListeners(): void {
    abortController = new AbortController();
    const { signal } = abortController;

    containerElement.addEventListener("mousemove", handleMouseMove, {
      signal,
      passive: true,
    });
    containerElement.addEventListener("click", handleClick, {
      signal,
      capture: true,
    });
    document.addEventListener("keydown", handleKeyDown, {
      signal,
      capture: true,
    });
    window.addEventListener("scroll", handleScroll, { signal, passive: true });
    window.addEventListener("resize", handleResize, { signal, passive: true });
  }

  function detachEventListeners(): void {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  }

  function activate(): void {
    if (state.mode !== "inactive") {
      return;
    }

    setState({ mode: "hover" });
    attachEventListeners();
    startBoundsRefreshInterval();
    eventHandlers.onActivate?.();
  }

  function deactivate(): void {
    if (state.mode === "inactive") {
      return;
    }

    detachEventListeners();
    stopBoundsRefreshInterval();
    setState(createInitialState());
    eventHandlers.onDeactivate?.();
  }

  function freeze(): void {
    if (state.mode !== "hover" || !state.hoveredElement) {
      return;
    }

    setState({
      mode: "frozen",
      frozenElement: state.hoveredElement,
      selectedElement: state.hoveredElement,
      labelStatus: "selected",
    });

    if (state.inspectedComponent) {
      eventHandlers.onSelect?.(state.inspectedComponent);
    }
  }

  function unfreeze(): void {
    if (state.mode !== "frozen") {
      return;
    }

    setState({
      mode: "hover",
      frozenElement: null,
      labelStatus: "hover",
    });
  }

  function getState(): InspectorState {
    return state;
  }

  function subscribe(listener: (state: InspectorState) => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function destroy(): void {
    deactivate();
    listeners.clear();
  }

  return {
    activate,
    deactivate,
    freeze,
    unfreeze,
    getState,
    subscribe,
    destroy,
  };
}
