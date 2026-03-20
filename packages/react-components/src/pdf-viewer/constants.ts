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

import type { PdfAnnotation } from "./types.js";

// Default empty values (stable references to avoid re-renders)
export const EMPTY_ANNOTATIONS: Record<number, PdfAnnotation[]> = {};
export const EMPTY_ANNOTATION_ARRAY: PdfAnnotation[] = [];
export const EMPTY_STRING = "";

// Scale and dimension configuration
export const SCALE_STEP = 0.25;
export const MIN_SCALE = 0.25;
export const MAX_SCALE = 5.0;
export const DEFAULT_PAGE_HEIGHT = 792;
export const THUMBNAIL_GAP = 12;
export const THUMBNAIL_SCALE = 0.2;
export const DEVICE_PIXEL_RATIO: number = typeof window !== "undefined"
  ? window.devicePixelRatio || 1
  : 1;

// pdfjs EventBus event names
export const FIND_EVENT = "find";
// cspell:disable-next-line -- pdfjs EventBus event name
export const UPDATE_FIND_CONTROL_STATE_EVENT = "updatefindcontrolstate";
// cspell:disable-next-line -- pdfjs EventBus event name
export const UPDATE_FIND_MATCHES_COUNT_EVENT = "updatefindmatchescount";
// cspell:disable-next-line -- pdfjs EventBus event name
export const PAGE_CHANGING_EVENT = "pagechanging";
// cspell:disable-next-line -- pdfjs EventBus event name
export const SCALE_CHANGING_EVENT = "scalechanging";
// cspell:disable-next-line -- pdfjs EventBus event name
export const PAGE_RENDERED_EVENT = "pagerendered";
