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

// BaseVideoViewer
export { BaseVideoViewer } from "../../video-viewer/BaseVideoViewer.js";
export type {
  BaseVideoViewerProps,
  VideoViewerMediaProps,
} from "../../video-viewer/VideoViewerApi.js";

// VideoViewer (Media wrapper)
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
import { VideoViewer as _VideoViewer } from "../../video-viewer/VideoViewer.js";
export const VideoViewer: typeof _VideoViewer = withOsdkMetrics(
  _VideoViewer,
  "VideoViewer"
);
