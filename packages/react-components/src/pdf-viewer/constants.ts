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

// Outline heading extraction
/** Text must be at least 15% larger than the most common font size to be considered a heading. */
export const OUTLINE_HEADING_SIZE_RATIO = 1.15;
/** Headings longer than this are likely paragraphs and are filtered out. */
export const OUTLINE_MAX_HEADING_LENGTH = 200;

// pdfjs EventBus event names
export const FIND_EVENT = "find";
export const UPDATE_FIND_CONTROL_STATE_EVENT = "updatefindcontrolstate";
export const UPDATE_FIND_MATCHES_COUNT_EVENT = "updatefindmatchescount";
export const PAGE_CHANGING_EVENT = "pagechanging";
export const SCALE_CHANGING_EVENT = "scalechanging";
export const PAGE_RENDERED_EVENT = "pagerendered";
<<<<<<< HEAD
=======
// cspell:disable-next-line -- pdfjs EventBus event name
>>>>>>> 920d86d89 (updated based on comments)
export const PAGES_LOADED_EVENT = "pagesloaded";
