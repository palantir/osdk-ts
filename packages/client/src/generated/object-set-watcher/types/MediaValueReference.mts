/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { DatasetFileReference } from "./DatasetFileReference.mjs";
import type { MediaItemReference } from "./MediaItemReference.mjs";
import type { MediaViewItemReference } from "./MediaViewItemReference.mjs";
export interface MediaValueReference_mediaSetItem {
  type: "mediaSetItem";
  mediaSetItem: MediaItemReference;
}

export interface MediaValueReference_mediaSetViewItem {
  type: "mediaSetViewItem";
  mediaSetViewItem: MediaViewItemReference;
}

export interface MediaValueReference_immutableDatasetFile {
  type: "immutableDatasetFile";
  immutableDatasetFile: DatasetFileReference;
}

export type MediaValueReference =
  | MediaValueReference_mediaSetItem
  | MediaValueReference_mediaSetViewItem
  | MediaValueReference_immutableDatasetFile;
