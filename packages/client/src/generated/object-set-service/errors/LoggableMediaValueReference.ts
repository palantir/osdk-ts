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

import type { DatasetFileReference } from "../api/DatasetFileReference.js";
import type { MediaItemReference } from "../api/MediaItemReference.js";
import type { LoggableMediaViewItemReference } from "./LoggableMediaViewItemReference.js";
export interface LoggableMediaValueReference_mediaItem {
  type: "mediaItem";
  mediaItem: MediaItemReference;
}

export interface LoggableMediaValueReference_mediaViewItem {
  type: "mediaViewItem";
  mediaViewItem: LoggableMediaViewItemReference;
}

export interface LoggableMediaValueReference_datasetFile {
  type: "datasetFile";
  datasetFile: DatasetFileReference;
}
/**
 * A reference to media contained in either a media set or a dataset.
 */
export type LoggableMediaValueReference =
  | LoggableMediaValueReference_mediaItem
  | LoggableMediaValueReference_mediaViewItem
  | LoggableMediaValueReference_datasetFile;
