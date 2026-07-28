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

// Types
export type {
  AnimatedBounds,
  AnimationOptions,
  ComponentLabelProps,
  HighlightVariant,
  InspectedComponent,
  InspectorController,
  InspectorEventHandlers,
  InspectorMode,
  InspectorOptions,
  InspectorOverlayProps,
  InspectorState,
  LabelPosition,
  OverlayBounds,
  SelectionHighlightProps,
  SelectionLabelStatus,
} from "./types.js";

// Components
export { ComponentLabel } from "./components/ComponentLabel.js";
export { InspectorBanner } from "./components/InspectorBanner.js";
export { InspectorOverlay } from "./components/InspectorOverlay.js";
export { SelectionHighlight } from "./components/SelectionHighlight.js";

// Hooks
export { useAnimatedBounds } from "./hooks/useAnimatedBounds.js";

// Controller
export { createInspectorController } from "./inspectorController.js";

// Orchestrator
export { ClickToInspectSystem } from "./ClickToInspectSystem.js";
export type { ClickToInspectOptions } from "./ClickToInspectSystem.js";

// Factory
export { createClickToInspect } from "./createClickToInspect.js";

// Utilities
export {
  createElementBounds,
  getElementAtPosition,
} from "./utils/elementBounds.js";
export {
  DEFAULT_CONVERGENCE_THRESHOLD,
  interpolate,
  INTERPOLATION_FACTORS,
} from "./utils/interpolation.js";
export {
  computeLabelPosition,
  OFFSCREEN_POSITION,
} from "./utils/labelPositioning.js";
