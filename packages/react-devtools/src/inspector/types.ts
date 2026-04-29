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

import type { Fiber, SourceLocation } from "../fiber/types.js";

export interface OverlayBounds {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: string;
  transform: string;
}

export interface LabelPosition {
  left: number;
  top: number;
  arrowLeft: number;
  arrowPosition: "top" | "bottom";
}

export interface InspectedComponent {
  name: string;
  fiber: WeakRef<Fiber>;
  element: WeakRef<Element>;
  sourceLocation: SourceLocation | null;
  props: Record<string, unknown>;
  hookCount: number;
}

export type SelectionLabelStatus = "idle" | "hover" | "selected" | "copying";

export type InspectorMode = "inactive" | "hover" | "frozen";

export interface InspectorState {
  mode: InspectorMode;
  mouseX: number;
  mouseY: number;
  hoveredElement: Element | null;
  selectedElement: Element | null;
  frozenElement: Element | null;
  inspectedComponent: InspectedComponent | null;
  selectionBounds: OverlayBounds | null;
  labelPosition: LabelPosition | null;
  labelStatus: SelectionLabelStatus;
  viewportVersion: number;
}

export interface InspectorEventHandlers {
  onActivate: () => void;
  onDeactivate: () => void;
  onSelect: (component: InspectedComponent) => void;
  onHover: (component: InspectedComponent | null) => void;
  onOpenSource: (sourceLocation: SourceLocation) => void;
}

export interface InspectorOptions {
  containerElement?: HTMLElement;
  throttleMs?: number;
  boundsRefreshIntervalMs?: number;
  eventHandlers?: Partial<InspectorEventHandlers>;
  zIndex?: number;
}

export interface AnimationOptions {
  interpolationFactor?: number;
  convergenceThreshold?: number;
  enabled?: boolean;
}

export interface AnimatedBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type HighlightVariant = "hover" | "selected" | "frozen";

export interface SelectionHighlightProps {
  bounds: OverlayBounds | null;
  variant: HighlightVariant;
  animationOptions?: AnimationOptions;
  visible: boolean;
}

export interface ComponentLabelProps {
  component: InspectedComponent | null;
  bounds: OverlayBounds | null;
  mouseX: number;
  mouseY: number;
  status: SelectionLabelStatus;
  onOpenSource?: (sourceLocation: SourceLocation) => void;
  visible: boolean;
}

export interface InspectorOverlayProps {
  state: InspectorState;
  eventHandlers?: Partial<InspectorEventHandlers>;
  animationOptions?: AnimationOptions;
  zIndex?: number;
}

export interface InspectorController {
  activate: () => void;
  deactivate: () => void;
  freeze: () => void;
  unfreeze: () => void;
  getState: () => InspectorState;
  subscribe: (listener: (state: InspectorState) => void) => () => void;
  destroy: () => void;
}
